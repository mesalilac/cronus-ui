import gsap from 'gsap';
import { createEffect, type JSX, onCleanup } from 'solid-js';

import {
    Popover,
    type PositionArea,
    type TargetPositionArea,
} from '~/ui/Popover';

import { useDropdownMenuContext } from './context';

export type DropdownMenuContentProps = {
    targetPositionArea?: TargetPositionArea;
    positionTryFallbacks?: (anchorName: string) => PositionArea[];
    children: JSX.Element;
};

export const Content = (props: DropdownMenuContentProps) => {
    let divRef!: HTMLDivElement;

    const ctx = useDropdownMenuContext();

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
            onOpenChange={ctx.onOpenChange}
            open={ctx.isOpen()}
            positionTryFallbacks={
                props.positionTryFallbacks ??
                (() => ['block-start span-inline-end'])
            }
            targetPositionArea={
                props.targetPositionArea ?? 'block-end span-inline-end'
            }
            triggerElement={ctx.triggerRef()}
        >
            <div
                class='mt-1 mb-1 min-w-30 rounded-lg border border-neutral-600 bg-neutral-800 p-2 text-white shadow-2xl shadow-black'
                ref={divRef}
            >
                {props.children}
            </div>
        </Popover>
    );
};
