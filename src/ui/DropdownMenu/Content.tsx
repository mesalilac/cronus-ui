import gsap from 'gsap';
import {
    type Accessor,
    createEffect,
    createMemo,
    type JSX,
    onCleanup,
} from 'solid-js';

import { useMenuContext } from '~/ui/Menu/context';
import {
    Popover,
    type PositionArea,
    type TargetPositionArea,
} from '~/ui/Popover';

export type DropdownMenuContentProps = {
    targetPositionArea?: TargetPositionArea;
    positionTryFallbacks?: (anchorName: string) => PositionArea[];
    children: JSX.Element;
};

export const Content = (props: DropdownMenuContentProps) => {
    let divRef!: HTMLDivElement;

    const ctx = useMenuContext();

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

    const targetPositionArea: Accessor<TargetPositionArea> = createMemo(
        () => props.targetPositionArea ?? 'block-end span-inline-end',
    );

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
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
                class='mt-1 mb-1 max-h-[85vh] min-w-30 overflow-y-auto rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default'
                ref={divRef}
            >
                {props.children}
            </div>
        </Popover>
    );
};
