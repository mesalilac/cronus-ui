import { gsap } from 'gsap';
import { createEffect, type JSX, mergeProps, onCleanup } from 'solid-js';

import { Popover, type PopoverProps } from '~/ui/Popover';
import { cn } from '~/utils';

import { useSelectContext } from './context';

export interface SelectContentProps
    extends Pick<
        PopoverProps,
        'targetPosition' | 'targetPositionArea' | 'positionTryFallbacks'
    > {
    class?: string;
    children: JSX.Element;
}

export const Content = (rawProps: SelectContentProps) => {
    const props = mergeProps(
        {
            targetPosition: 'fixed',
            targetPositionArea: 'block-end span-inline-end',
            positionTryFallbacks: () => ['block-start span-inline-end'],
        } satisfies Partial<SelectContentProps>,
        rawProps,
    );

    let divRef!: HTMLDivElement;

    const ctx = useSelectContext();

    createEffect(() => {
        if (ctx.isOpen() && divRef) {
            const gsapCtx = gsap.context(() => {
                gsap.from(divRef, {
                    autoAlpha: 0,
                    scale: 0.98,
                    overflow: 'hidden',
                    duration: 0.2,
                    ease: 'power3.out',
                });
            });

            onCleanup(() => gsapCtx.revert());
        }
    });

    const triggerWidth = (): string => {
        const ref = ctx.triggerRef();

        if (ref) return `${ref.getBoundingClientRect().width}px`;

        return 'auto';
    };

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={props.positionTryFallbacks}
            targetPosition={props.targetPosition}
            targetPositionArea={props.targetPositionArea}
            triggerElement={ctx.triggerRef()}
        >
            <div
                class={cn(
                    'mt-1 mb-1 max-h-80 overflow-y-auto overscroll-contain rounded-default bg-surface-2 text-text-primary shadow-default outline outline-accent [scrollbar-gutter:stable]',
                    props.class,
                )}
                ref={divRef}
                style={{
                    'min-width': triggerWidth(),
                }}
            >
                <div class='flex flex-col gap-1 p-2'>{props.children}</div>
            </div>
        </Popover>
    );
};
