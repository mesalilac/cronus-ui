import { gsap } from 'gsap';
import {
    type Component,
    createComputed,
    createSignal,
    type JSX,
    mergeProps,
    on,
    Show,
} from 'solid-js';
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
    show?: boolean;
    onShowChange?: (value: boolean) => void;
    position?: 'top' | 'bottom';
    variant?: BannerVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
    class?: string;
    children: JSX.Element;
};

export const Banner: Component<BannerProps> = (rawProps) => {
    const props = mergeProps(
        {
            variant: 'default',
            position: 'top',
            dismissible: true,
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

    const [show, setShow] = createSignal(props.show ?? true);

    createComputed(
        on(
            () => Boolean(props.show),
            (newVal) => {
                setShow(newVal);
                props.onShowChange?.(newVal);
            },
            { defer: true },
        ),
    );

    const dismiss = () => {
        const newVal = !show();

        if (props.show === undefined) setShow(newVal);
        props.onShowChange?.(newVal);

        props.onDismiss?.();
    };

    return (
        <Transition
            onEnter={(el, done) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    y: props.position === 'top' ? -12 : 12,
                    duration: 0.2,
                    ease: 'power3.out',
                    onComplete: done,
                });
            }}
            onExit={(el, done) => {
                gsap.to(el, {
                    autoAlpha: 0,
                    y: props.position === 'top' ? -12 : 12,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: done,
                });
            }}
        >
            <Show when={show()}>
                <div
                    class={cn(
                        'fixed flex min-h-12 w-full items-center justify-center border p-2 shadow-default backdrop-blur-sm',
                        props.position === 'top' ? 'top-0' : 'bottom-0',
                        variantStyles[props.variant],
                        props.class,
                    )}
                >
                    {props.children}
                    <Show when={props.dismissible}>
                        <div class='absolute right-2' data-slot='dismiss-icon'>
                            <Button
                                class='text-inherit opacity-60'
                                onClick={dismiss}
                                variant='icon'
                            >
                                <IconMenuCloseMd class='size-5' />
                            </Button>
                        </div>
                    </Show>
                </div>
            </Show>
        </Transition>
    );
};
