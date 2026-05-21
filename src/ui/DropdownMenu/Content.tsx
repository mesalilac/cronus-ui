import gsap from 'gsap';
import { createEffect, type JSXElement, mergeProps, onCleanup } from 'solid-js';

import type { PartialComponentProps } from '~/types';
import { useMenuContext } from '~/ui/Menu/context';
import {
    COMMON_POSITION_AREA,
    type CommonPositionArea,
    Popover,
} from '~/ui/Popover';
import { cn } from '~/utils';

export type DropdownMenuContentProps = {
    placement?: CommonPositionArea;
    placementFallback?: CommonPositionArea[];
    class?: string;
    children: JSXElement;
};

export const Content = (rawProps: DropdownMenuContentProps) => {
    const ctx = useMenuContext();

    const props = mergeProps(
        {
            placement: 'bottom-start',
            placementFallback: [
                'top-start',
                'bottom-start',
                'right-start',
                'left-start',
            ] as CommonPositionArea[],
        } satisfies PartialComponentProps<typeof Content>,
        rawProps,
    );

    let divRef!: HTMLDivElement;

    createEffect(() => {
        if (ctx.isOpen() && divRef) {
            const gsapCtx = gsap.context(() => {
                gsap.from(divRef, {
                    autoAlpha: 0,
                    duration: 0.2,
                    scale: 0.98,
                    ease: 'power3.out',
                });
            });

            onCleanup(() => gsapCtx.revert());
        }
    });

    const getMargin = () => {
        if (
            props.placement.startsWith('top') ||
            props.placement.startsWith('bottom')
        ) {
            return cn('my-1');
        } else if (
            props.placement.startsWith('right') ||
            props.placement.startsWith('left')
        ) {
            return cn('mx-1');
        }
    };

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={() =>
                props.placementFallback.map((f) => COMMON_POSITION_AREA[f])
            }
            targetPosition='fixed'
            targetPositionArea={COMMON_POSITION_AREA[props.placement]}
            triggerElement={ctx.triggerRef()}
        >
            <div
                class={cn(
                    'max-h-[85vh] min-w-30 overflow-y-auto rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default',
                    getMargin(),
                    props.class,
                )}
                ref={divRef}
            >
                {props.children}
            </div>
        </Popover>
    );
};
