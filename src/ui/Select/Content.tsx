import { gsap } from 'gsap';
import {
    createEffect,
    type FlowComponent,
    type JSXElement,
    onCleanup,
} from 'solid-js';

import { COMMON_POSITION_AREA, Popover } from '~/ui/Popover';
import { cn } from '~/utils';

import { useSelectContext } from './context';

export type SelectContentProps = {
    class?: string;
    children: JSXElement;
};

export const Content = (props: SelectContentProps) => {
    const ctx = useSelectContext();

    let divRef!: HTMLDivElement;

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

    const getMargin = () => {
        if (
            ctx.placement().startsWith('top') ||
            ctx.placement().startsWith('bottom')
        ) {
            return cn('my-1');
        } else if (
            ctx.placement().startsWith('right') ||
            ctx.placement().startsWith('left')
        ) {
            return cn('mx-1');
        }
    };

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={() =>
                ctx.placementFallback().map((f) => COMMON_POSITION_AREA[f])
            }
            targetPosition='fixed'
            targetPositionArea={COMMON_POSITION_AREA[ctx.placement()]}
            triggerElement={ctx.triggerRef()}
        >
            <div
                class={cn(
                    'flex max-h-80 flex-col gap-2 rounded-default bg-surface-2 p-2 text-text-primary shadow-default outline outline-accent',
                    getMargin(),
                    props.class,
                )}
                ref={divRef}
                style={{
                    'min-width': triggerWidth(),
                    'max-width': triggerWidth(),
                }}
            >
                {props.children}
            </div>
        </Popover>
    );
};

export const SelectList: FlowComponent<{ class?: string }, JSXElement> = (
    props,
) => {
    return (
        <div
            class={cn(
                'flex flex-1 flex-col gap-1 overflow-y-auto',
                props.class,
            )}
        >
            {props.children}
            <span class='hidden select-none text-center text-text-secondary only:block'>
                No options found
            </span>
        </div>
    );
};
