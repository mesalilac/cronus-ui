import { gsap } from 'gsap';
import { createEffect, type JSXElement, onCleanup } from 'solid-js';

import { COMMON_POSITION_AREA, Popover } from '~/ui/Popover';

import { useSubMenuContext } from './context';

export type DropdownMenuSubContentProps = {
    children: JSXElement;
};

export const Content = (props: DropdownMenuSubContentProps) => {
    let divRef!: HTMLDivElement;

    const ctx = useSubMenuContext();

    createEffect(() => {
        if (ctx.isOpen() && divRef) {
            const gsapCtx = gsap.context(() => {
                gsap.from(divRef, {
                    autoAlpha: 0,
                    duration: 0.2,
                    height: 0,
                    overflow: 'hidden',
                    ease: 'power3.out',
                });
            });

            onCleanup(() => gsapCtx.revert());
        }
    });

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={() =>
                ctx.placementFallback().map((f) => COMMON_POSITION_AREA[f])
            }
            targetPositionArea={COMMON_POSITION_AREA[ctx.placement()]}
            triggerElement={ctx.triggerRef()}
            triggerEvents='mouseenter|mouseleave|click'
        >
            <div
                class='mr-2.5 ml-2.5 min-w-30 rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default'
                ref={divRef}
                role='none'
            >
                {props.children}
            </div>
        </Popover>
    );
};
