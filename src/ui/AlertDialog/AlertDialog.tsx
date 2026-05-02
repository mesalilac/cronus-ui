import { gsap } from 'gsap';
import {
    type Accessor,
    createComputed,
    createContext,
    createEffect,
    createSignal,
    type JSX,
    Match,
    mergeProps,
    on,
    onCleanup,
    onMount,
    Switch,
    useContext,
} from 'solid-js';
import { Portal } from 'solid-js/web';

import {
    IconWarningCircleWarning,
    IconWarningInfo,
    IconWarningTriangleWarning,
} from '~/icons';
import { Button, type ButtonVariant } from '~/ui/Button';
import { cn } from '~/utils';

type AlertDialogVariant = 'default' | 'warning' | 'danger';

export type AlertDialogProps = {
    variant?: AlertDialogVariant;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: JSX.Element;
};

export const AlertDialogContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: (value: boolean) => void;
    variant: Accessor<AlertDialogVariant>;
    closeDialog: () => void;
}>();

export const useAlertDialogContext = () => {
    const context = useContext(AlertDialogContext);
    if (!context) {
        throw new Error(
            'useAlertDialogContext must be used within the AlertDialogContext provider',
        );
    }
    return context;
};

type AlertDialogCompound = {
    (props: AlertDialogProps): JSX.Element;

    Trigger: typeof AlertDialogTrigger;
    Content: typeof AlertDialogContent;
    Header: typeof AlertDialogHeader;
    Body: typeof AlertDialogBody;
    Icon: typeof AlertDialogIcon;
    Title: typeof AlertDialogTitle;
    Footer: typeof AlertDialogFooter;
    Cancel: typeof AlertDialogCancel;
    Action: typeof AlertDialogAction;
};

export const AlertDialog: AlertDialogCompound = (rawProps) => {
    const props = mergeProps(
        {
            variant: 'default',
        } satisfies Partial<AlertDialogProps>,
        rawProps,
    );

    const [isOpen, setInternalIsOpen] = createSignal(props.open ?? false);

    createComputed(
        on(
            () => Boolean(props.open),
            (open) => {
                setInternalIsOpen(open);
            },
            { defer: true },
        ),
    );

    const setIsOpen = (open: boolean) => {
        if (props.open === undefined) setInternalIsOpen(open);
        props.onOpenChange?.(open);
    };

    const closeDialog = () => setIsOpen(false);

    return (
        <AlertDialogContext.Provider
            value={{
                isOpen,
                setIsOpen,
                variant: () => props.variant,
                closeDialog,
            }}
        >
            {props.children}
        </AlertDialogContext.Provider>
    );
};

type AlertDialogTriggerProps = {
    class?: string;
    variant?: ButtonVariant;
    children: JSX.Element;
};

const AlertDialogTrigger = (props: AlertDialogTriggerProps) => {
    const ctx = useAlertDialogContext();

    return (
        <Button
            class={props.class}
            onClick={() => ctx.setIsOpen(true)}
            variant={props.variant}
        >
            {props.children}
        </Button>
    );
};

type AlertDialogContentProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogContent = (props: AlertDialogContentProps) => {
    let dialogRef!: HTMLDialogElement;

    const ctx = useAlertDialogContext();

    const onEnterAnim = () => {
        const gsapCtx = gsap.context(() => {
            gsap.timeline().fromTo(
                dialogRef,
                {
                    autoAlpha: 0,
                    y: 16,
                    scale: 0.96,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: 'power1.out',
                    onComplete: () => gsapCtx.kill(),
                },
                '<',
            );
        });
    };

    const onExitAnim = () => {
        const gsapCtx = gsap.context(() => {
            gsap.to(dialogRef, {
                autoAlpha: 0,
                scale: 0.96,
                y: 12,
                duration: 0.18,
                ease: 'power1.in',
                onComplete: () => {
                    gsapCtx.kill();
                    dialogRef.close();
                },
            });
        });
    };

    onMount(() => {
        const abortController = new AbortController();

        dialogRef.addEventListener(
            'cancel',
            (e) => {
                e.preventDefault();
                ctx.setIsOpen(false);
            },
            abortController,
        );

        onCleanup(() => {
            abortController.abort();
        });
    });

    createEffect(() => {
        if (ctx.isOpen()) {
            dialogRef.showModal();

            onEnterAnim();

            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
            });
        } else {
            onExitAnim();
        }
    });

    const variantStyles: Record<AlertDialogVariant, string> = {
        default: cn('border-border'),
        warning: cn('border-warning/40'),
        danger: cn('border-danger/40'),
    };

    return (
        <Portal>
            <dialog
                class={cn(
                    'm-auto flex w-10/12 flex-col gap-4 rounded-default border bg-surface-1/80 p-4 text-text-primary shadow-default backdrop:bg-black/5 backdrop:backdrop-blur-xs sm:w-4/12',
                    variantStyles[ctx.variant()],
                    props.class,
                )}
                closedby='none'
                ref={dialogRef}
            >
                {props.children}
            </dialog>
        </Portal>
    );
};

type AlertDialogHeaderProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogHeader = (props: AlertDialogHeaderProps) => {
    return (
        <div class={cn('flex flex-row items-center gap-2', props.class)}>
            {props.children}
        </div>
    );
};

type AlertDialogBodyProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogBody = (props: AlertDialogBodyProps) => {
    return (
        <div
            class={cn(
                'flex max-h-64 flex-col gap-2 overflow-y-auto text-sm text-text-muted',
                props.class,
            )}
        >
            {props.children}
        </div>
    );
};

type AlertDialogIconProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogIcon = (props: AlertDialogIconProps) => {
    const ctx = useAlertDialogContext();

    return (
        <Switch
            fallback={
                <IconWarningInfo
                    class={cn('size-6 shrink-0 text-text-muted', props.class)}
                />
            }
        >
            <Match when={props.children}>{props.children}</Match>
            <Match when={ctx.variant() === 'warning'}>
                <IconWarningTriangleWarning
                    class={cn('size-6 shrink-0 text-text-warning', props.class)}
                />
            </Match>
            <Match when={ctx.variant() === 'danger'}>
                <IconWarningCircleWarning
                    class={cn('size-6 shrink-0 text-text-danger', props.class)}
                />
            </Match>
        </Switch>
    );
};

type AlertDialogTitleProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogTitle = (props: AlertDialogTitleProps) => {
    return (
        <h1
            class={cn(
                'flex items-center gap-2 font-semibold text-lg',
                props.class,
            )}
        >
            {props.children ?? 'Are you sure?'}
        </h1>
    );
};

type AlertDialogFooterProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogFooter = (props: AlertDialogFooterProps) => {
    return (
        <div
            class={cn(
                'flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end',
                props.class,
            )}
        >
            {props.children}
        </div>
    );
};

type AlertDialogCancelProps = {
    class?: string;
    children?: JSX.Element;
};

const AlertDialogCancel = (props: AlertDialogCancelProps) => {
    const ctx = useAlertDialogContext();

    return (
        <Button
            class={props.class}
            onClick={() => ctx.closeDialog()}
            variant='ghost'
        >
            {props.children ?? 'Cancel'}
        </Button>
    );
};

type AlertDialogActionProps = {
    class?: string;
    onClick?: () => void;
    variant?: ButtonVariant;
    children?: JSX.Element;
};

const AlertDialogAction = (props: AlertDialogActionProps) => {
    const ctx = useAlertDialogContext();

    const getVariant: () => ButtonVariant = () => {
        if (props.variant) return props.variant;

        switch (ctx.variant()) {
            case 'warning':
                return 'warning';
            case 'danger':
                return 'danger';
            default:
                return 'primary';
        }
    };

    return (
        <Button
            class={props.class}
            onClick={() => {
                ctx.closeDialog();
                props.onClick?.();
            }}
            variant={getVariant()}
        >
            {props.children ?? 'Confirm'}
        </Button>
    );
};

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Body = AlertDialogBody;
AlertDialog.Icon = AlertDialogIcon;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
