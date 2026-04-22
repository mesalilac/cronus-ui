import { gsap } from 'gsap';
import {
    type Component,
    createComputed,
    createSignal,
    type JSX,
    mergeProps,
    on,
    onCleanup,
    Show,
} from 'solid-js';
import { Portal } from 'solid-js/web';
import { Transition } from 'solid-transition-group';

import { IconMenuCloseMd } from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

export type BannerVariant =
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';

export type BannerProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    placement?: 'top' | 'bottom';
    variant?: BannerVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
    autoDismissMs?: number;
    pauseOnHover?: boolean;
    class?: string;
    children: JSX.Element;
};

export const Banner: Component<BannerProps> = (rawProps) => {
    let dismissProgressbarRef!: HTMLDivElement;

    const props = mergeProps(
        {
            variant: 'default',
            placement: 'top',
            dismissible: true,
            pauseOnHover: true,
        } satisfies Partial<BannerProps>,
        rawProps,
    );

    const variantStyles: Record<BannerVariant, string> = {
        default: cn('border-border-strong bg-surface-3/80'),
        success: cn('bg-success/20 text-text-success'),
        warning: cn('bg-warning/20 text-text-warning'),
        danger: cn('bg-danger/20 text-text-danger'),
        info: cn('bg-info/20 text-text-info'),
    };

    const [open, setOpen] = createSignal(props.open ?? true);

    createComputed(
        on(
            () => Boolean(props.open),
            (newVal) => {
                setOpen(newVal);
            },
            { defer: true },
        ),
    );

    const dismiss = () => {
        const newVal = false;

        if (props.open === undefined) setOpen(newVal);
        props.onOpenChange?.(newVal);

        props.onDismiss?.();
    };

    const canPauseAutoDismiss = () =>
        props.autoDismissMs !== undefined &&
        !Number.isNaN(props.autoDismissMs) &&
        props.pauseOnHover;

    let dismissTimeline: gsap.core.Timeline | undefined;

    const killDismissTimeline = () => {
        dismissTimeline?.kill();
        dismissTimeline = undefined;
    };

    onCleanup(() => killDismissTimeline());

    return (
        <Portal>
            <Transition
                onEnter={(el, done) => {
                    killDismissTimeline();

                    if (
                        props.autoDismissMs !== undefined &&
                        !Number.isNaN(props.autoDismissMs)
                    ) {
                        gsap.set(dismissProgressbarRef, { scaleX: 1 });

                        dismissTimeline = gsap.timeline({
                            onComplete: dismiss,
                        });

                        dismissTimeline.fromTo(
                            dismissProgressbarRef,
                            { scaleX: 1 },
                            {
                                scaleX: 0,
                                duration: props.autoDismissMs / 1000,
                                ease: 'linear',
                                transformOrigin: 'left',
                            },
                        );
                    }

                    gsap.from(el, {
                        autoAlpha: 0,
                        y: props.placement === 'top' ? -12 : 12,
                        duration: 0.2,
                        ease: 'power3.out',
                        onComplete: done,
                    });
                }}
                onExit={(el, done) => {
                    killDismissTimeline();

                    gsap.to(el, {
                        autoAlpha: 0,
                        y: props.placement === 'top' ? -12 : 12,
                        duration: 0.2,
                        ease: 'power3.in',
                        onComplete: done,
                    });
                }}
            >
                <Show when={open()}>
                    <div
                        class={cn(
                            'fixed z-50 flex min-h-12 w-full items-center justify-center border p-2 shadow-default backdrop-blur-sm',
                            props.placement === 'top' ? 'top-0' : 'bottom-0',
                            variantStyles[props.variant],
                            props.class,
                        )}
                        onMouseEnter={() =>
                            canPauseAutoDismiss() && dismissTimeline?.pause()
                        }
                        onMouseLeave={() =>
                            canPauseAutoDismiss() && dismissTimeline?.resume()
                        }
                        role='none'
                    >
                        {props.children}
                        <Show when={props.dismissible}>
                            <div
                                class='absolute right-2'
                                data-slot='dismiss-icon'
                            >
                                <Button
                                    class='text-inherit opacity-60'
                                    onClick={dismiss}
                                    variant='icon'
                                >
                                    <IconMenuCloseMd class='size-5' />
                                </Button>
                            </div>
                        </Show>
                        <Show
                            when={
                                props.autoDismissMs !== undefined &&
                                !Number.isNaN(props.autoDismissMs)
                            }
                        >
                            <div class='absolute bottom-0 left-0 h-1 w-full overflow-hidden'>
                                <div
                                    class={cn(
                                        'h-full origin-left bg-current',
                                        props.variant === 'default' &&
                                            'bg-accent',
                                    )}
                                    ref={dismissProgressbarRef}
                                />
                            </div>
                        </Show>
                    </div>
                </Show>
            </Transition>
        </Portal>
    );
};
