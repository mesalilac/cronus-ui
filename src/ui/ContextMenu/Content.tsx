import gsap from 'gsap';
import {
    type Accessor,
    createEffect,
    createMemo,
    createSignal,
    type JSX,
    onCleanup,
    onMount,
} from 'solid-js';

import { useMenuContext } from '~/ui/Menu/context';
import { Popover, type TargetPositionArea } from '~/ui/Popover';

export type ContextMenuContentProps = {
    disableEventDelegation?: boolean;
    children: JSX.Element;
};

export const Content = (props: ContextMenuContentProps) => {
    let divRef!: HTMLDivElement;

    const ctx = useMenuContext();

    const [mousePos, setMousePos] = createSignal({ x: 0, y: 0 });

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

    onMount(() => {
        const abortController = new AbortController();

        ctx.triggerRef()?.addEventListener('contextmenu', (e) => {
            if (ctx.disabled()) return;

            if (ctx.isOpen()) ctx.setIsOpen(false);

            if (
                props.disableEventDelegation !== undefined &&
                e.target !== e.currentTarget
            )
                return;

            e.preventDefault();
            e.stopPropagation();

            const { clientX, clientY } = e;
            setMousePos({ x: clientX, y: clientY });
            ctx.setIsOpen(true);
        });

        onCleanup(() => {
            abortController.abort();
        });
    });

    const targetPositionArea: Accessor<TargetPositionArea> = createMemo(() => {
        const offset = 2;

        const x = mousePos().x + offset;
        const y = mousePos().y + offset;

        return {
            top: () => `${y}px`,
            left: () => `${x}px`,
        };
    });

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            targetPosition='fixed'
            targetPositionArea={targetPositionArea()}
            triggerElement={ctx.triggerRef()}
            triggerEvents=''
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
