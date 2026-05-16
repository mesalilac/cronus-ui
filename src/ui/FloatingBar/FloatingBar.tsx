import { type FlowComponent, mergeProps, type Ref } from 'solid-js';

import { cn } from '~/utils';

type FloatingBarPlacement = 'top' | 'right' | 'bottom' | 'left';
type FloatingBarAlignment = 'start' | 'center' | 'end';
type FloatingBarOrientation = 'horizontal' | 'vertical';

export type FloatingBarProps = {
    placement?: FloatingBarPlacement;
    alignment?: FloatingBarAlignment;
    orientation?: FloatingBarOrientation;
    class?: string;
    ref?: Ref<HTMLDivElement>;
};

const placementStyles: Record<FloatingBarPlacement, string> = {
    top: cn(`top-4  px-3 py-2 flex-row`),
    right: cn(`right-4 px-2 py-3 flex-col`),
    bottom: cn(`bottom-4 px-3 py-2 flex-row`),
    left: cn(`left-4 px-2 py-3 flex-col`),
};

const alignmentStyles: Record<
    FloatingBarAlignment,
    Record<FloatingBarPlacement, string>
> = {
    start: {
        top: cn(`left-4`),
        right: cn(`top-4`),
        bottom: cn(`left-4`),
        left: cn(`top-4`),
    },
    center: {
        top: cn('left-1/2 -translate-x-1/2'),
        right: cn('top-1/2 -translate-y-1/2'),
        bottom: cn('left-1/2 -translate-x-1/2'),
        left: cn('top-1/2 -translate-y-1/2'),
    },
    end: {
        top: cn(`right-4`),
        right: cn(`bottom-4`),
        bottom: cn(`right-4`),
        left: cn(`bottom-4`),
    },
};

export const FloatingBar: FlowComponent<FloatingBarProps> = (rawProps) => {
    const props = mergeProps(
        {
            placement: 'bottom',
            alignment: 'center',
        } satisfies Partial<FloatingBarProps>,
        rawProps,
    );

    return (
        <div
            class={cn(
                'pointer-events-auto absolute flex max-h-[calc(100%-2rem)] w-fit max-w-[calc(100%-2rem)] items-center gap-2 rounded-default bg-surface-2 text-text-primary shadow-default outline outline-border-strong',
                placementStyles[props.placement],
                alignmentStyles[props.alignment][props.placement],
                props.class,
            )}
            ref={props.ref}
        >
            {props.children}
        </div>
    );
};
