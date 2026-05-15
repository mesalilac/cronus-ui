import { gsap } from 'gsap';
import {
    createComputed,
    createMemo,
    createSignal,
    type FlowComponent,
    Match,
    mergeProps,
    on,
    onCleanup,
    Show,
    Switch,
} from 'solid-js';
import { Portal } from 'solid-js/web';
import { Transition } from 'solid-transition-group';

import {
    IconInterfaceCheck,
    IconMenuCloseMd,
    IconWarningCircleWarning,
    IconWarningInfo,
} from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

export type BannerVariant =
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';

type BannerStrategy = 'absolute' | 'fixed' | 'sticky';

export type BannerProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    placement?: 'top' | 'bottom';
    strategy?: BannerStrategy;
    variant?: BannerVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
    displace?: boolean;
    autoDismissMs?: number;
    pauseOnHover?: boolean;
    class?: string;
};

export const Banner: FlowComponent<BannerProps> = (rawProps) => {
    let dismissProgressbarRef!: HTMLDivElement;

    const props = mergeProps(
        {
            variant: 'default',
            placement: 'top',
            strategy: 'fixed',
            dismissible: true,
            pauseOnHover: true,
        } satisfies Partial<BannerProps>,
        rawProps,
    );

    const variantStyles: Record<BannerVariant, string> = {
        default: cn('border-accent'),
        success: cn('border-success'),
        warning: cn('border-warning'),
        danger: cn('border-danger'),
        info: cn('border-info'),
    };

    const strategyStyles: Record<BannerStrategy, string> = {
        absolute: cn('absolute'),
        fixed: cn('fixed'),
        sticky: cn('sticky'),
    };

    const variantIcon = createMemo(() => {
        return (
            <Switch
                fallback={
                    <IconWarningInfo class='size-5 text-text-secondary' />
                }
            >
                <Match when={props.variant === 'info'}>
                    <IconWarningInfo class='size-5 text-text-info' />
                </Match>
                <Match when={props.variant === 'success'}>
                    <IconInterfaceCheck class='size-5 text-text-success' />
                </Match>
                <Match when={props.variant === 'warning'}>
                    <IconWarningCircleWarning class='size-5 text-text-warning' />
                </Match>
                <Match when={props.variant === 'danger'}>
                    <IconWarningCircleWarning class='size-5 text-text-danger' />
                </Match>
            </Switch>
        );
    });

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

    const isFloating = () => !props.displace;

    const Content = () => {
        return (
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
                            'flex min-h-12 items-center justify-center gap-2 bg-surface-2 p-2 text-text-primary shadow-default backdrop-blur-xs',
                            !props.displace && strategyStyles[props.strategy],
                            isFloating()
                                ? [
                                      'inset-x-4 z-50',
                                      props.placement === 'top'
                                          ? 'top-0 rounded-b-default border-x-2 border-b-2'
                                          : 'bottom-0 rounded-t-default border-x-2 border-t-2',
                                  ]
                                : ['w-full border-2'],
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
                        {variantIcon()}
                        {props.children}
                        <Show when={props.dismissible}>
                            <div
                                class='absolute right-2'
                                data-slot='dismiss-icon'
                            >
                                <Button
                                    class='text-inherit opacity-60'
                                    onClick={dismiss}
                                    size='icon'
                                    variant='ghost'
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
                                        'h-full origin-left rounded-full bg-current',
                                        props.variant === 'default' &&
                                            'bg-white/60',
                                    )}
                                    ref={dismissProgressbarRef}
                                />
                            </div>
                        </Show>
                    </div>
                </Show>
            </Transition>
        );
    };

    return (
        <Show
            fallback={
                <Portal>
                    <Content />
                </Portal>
            }
            when={props.displace}
        >
            <Content />
        </Show>
    );
};
