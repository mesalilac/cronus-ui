import gsap from 'gsap';
import {
    type Accessor,
    createEffect,
    createMemo,
    type JSX,
    onCleanup,
} from 'solid-js';

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
                    scale: 0.98,
                    ease: 'power3.out',
                });
            });

            onCleanup(() => gsapCtx.revert());
        }
    });

    const targetPositionArea: Accessor<TargetPositionArea> = createMemo(() => {
        const contextMenuPos = ctx.contextMenuPos?.();

        if (contextMenuPos !== null && contextMenuPos !== undefined) {
            const offset = 2;

            const x = contextMenuPos.x + offset;
            const y = contextMenuPos.y + offset;

            return {
                top: () => `${y}px`,
                left: () => `${x}px`,
            };
        }

        return props.targetPositionArea ?? 'block-end span-inline-end';
    });

    return (
        <Popover
            onOpenChange={ctx.onOpenChange}
            open={ctx.isOpen()}
            positionTryFallbacks={
                props.positionTryFallbacks ??
                (() => ['block-start span-inline-end'])
            }
            targetPosition='fixed'
            targetPositionArea={targetPositionArea()}
            triggerElement={ctx.triggerRef()}
        >
            <div
                class='mt-1 mb-1 max-h-[85vh] min-w-30 overflow-y-auto rounded-lg border border-neutral-600 bg-neutral-800 p-2 text-white shadow-2xl shadow-black'
                ref={divRef}
            >
                {props.children}
            </div>
        </Popover>
    );
};
