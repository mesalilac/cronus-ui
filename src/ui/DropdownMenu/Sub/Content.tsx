import { gsap } from 'gsap';
import { createEffect, type JSX, onCleanup } from 'solid-js';

import { Popover } from '~/ui/Popover';

import { useSubMenuContext } from './context';

export type DropdownMenuSubContentProps = {
    children: JSX.Element;
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

    const handleMouseEnter = async () => {
        clearTimeout(ctx.closeTimer());
    };

    const handleMouseLeave = async () => {
        const timer = await setTimeout(() => {
            ctx.setIsOpen(false);
        }, 150);

        ctx.setCloseTimer(timer);
    };

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={() => [
                'span-block-start inline-end', // right top
                'span-block-end inline-start', // left bottom
                'span-block-start inline-start', // left top
                'block-start span-inline-end', // top
                'block-end span-inline-end', // bottom
            ]}
            targetPositionArea='span-block-end inline-end' // right bottom
            triggerElement={ctx.triggerRef()}
        >
            <div
                class='mr-2.5 ml-2.5 min-w-30 rounded-lg border border-neutral-600 bg-surface-2 p-2 text-text-primary shadow-default'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={divRef}
                role='none'
            >
                {props.children}
            </div>
        </Popover>
    );
};
