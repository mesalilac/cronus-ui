import { gsap } from 'gsap';
import {
    createComputed,
    createContext,
    createSignal,
    type JSX,
    Match,
    mergeProps,
    on,
    Show,
    Switch,
    useContext,
} from 'solid-js';
import { Transition } from 'solid-transition-group';

import {
    IconInterfaceCheck,
    IconMenuCloseMd,
    IconWarningCircleWarning,
    IconWarningInfo,
} from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

export type AlertVariant =
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';

const AlertContext = createContext<{
    dismiss: () => void;
}>();

const useAlertContext = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error(
            'useContext must be used within the correct context provider',
        );
    }

    return context;
};

export type AlertProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    variant?: AlertVariant;
    title: string;
    description: string;
    class?: string;
    dismissible?: boolean;
    children?: JSX.Element;
};

export const Alert = (rawProps: AlertProps) => {
    const props = mergeProps(
        {
            variant: 'default',
            dismissible: false,
        } satisfies Partial<AlertProps>,
        rawProps,
    );
    const [isOpen, setInternalIsOpen] = createSignal(props.open ?? true);

    createComputed(
        on(
            () => Boolean(props.open),
            (open) => {
                setInternalIsOpen(open);
            },
            { defer: true },
        ),
    );

    const setIsOpen = (value: boolean) => {
        if (props.open === undefined) setInternalIsOpen(value);
        props.onOpenChange?.(value);
    };

    const dismiss = () => setIsOpen(false);

    const variantStyles: Record<AlertVariant, string> = {
        default: cn('bg-surface-3/20 text-text-muted'),
        success: cn('bg-success/10 text-text-success'),
        warning: cn('bg-warning/10 text-text-warning'),
        danger: cn('bg-danger/10 text-text-danger'),
        info: cn('bg-info/10 text-text-info'),
    };

    return (
        <Transition
            onEnter={(el, done) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    scale: 0.98,
                    duration: 0.2,
                    ease: 'power3.out',
                    onComplete: done,
                });
            }}
            onExit={(el, done) => {
                gsap.to(el, {
                    autoAlpha: 0,
                    scale: 0.98,
                    duration: 0.2,
                    ease: 'power3.out',
                    onComplete: done,
                });
            }}
        >
            <Show when={isOpen()}>
                <AlertContext.Provider
                    value={{
                        dismiss,
                    }}
                >
                    <div
                        class={cn(
                            'relative flex w-full min-w-80 flex-row gap-4 rounded-default border-current border-l-4 p-4',
                            variantStyles[props.variant],
                            props.class,
                        )}
                    >
                        <Switch>
                            <Match when={props.variant === 'default'}>
                                <IconWarningInfo class='size-6' />
                            </Match>
                            <Match when={props.variant === 'success'}>
                                <IconInterfaceCheck class='size-6' />
                            </Match>
                            <Match when={props.variant === 'warning'}>
                                <IconWarningCircleWarning class='size-6' />
                            </Match>
                            <Match when={props.variant === 'danger'}>
                                <IconWarningCircleWarning class='size-6' />
                            </Match>
                            <Match when={props.variant === 'info'}>
                                <IconWarningInfo class='size-6' />
                            </Match>
                        </Switch>
                        <div class='flex w-full flex-col gap-2'>
                            <h1 class='font-medium'>{props.title}</h1>
                            <p>{props.description}</p>
                            <Show when={props.children}>
                                <div class='mt-2 flex flex-row items-center gap-2'>
                                    {props.children}
                                </div>
                            </Show>
                        </div>
                        <Show when={props.dismissible}>
                            <Button
                                class={cn(
                                    'absolute top-1 right-1 text-text-muted',
                                    props.class,
                                )}
                                onClick={() => dismiss()}
                                variant={'icon'}
                            >
                                <IconMenuCloseMd />
                            </Button>
                        </Show>
                    </div>
                </AlertContext.Provider>
            </Show>
        </Transition>
    );
};

export type AlertActionProps = {
    onClick?: (dismiss: () => void) => void;
    class?: string;
    children: JSX.Element;
};

Alert.Action = (props: AlertActionProps) => {
    const ctx = useAlertContext();

    return (
        <Button
            class={cn(
                'text-current outline-current hover:bg-current/10 active:bg-current/20',
                props.class,
            )}
            onClick={() => props.onClick?.(ctx.dismiss)}
            variant='outline'
        >
            {props.children}
        </Button>
    );
};
