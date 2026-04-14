import { type JSX, mergeProps } from 'solid-js';

import { cn } from '~/utils';

export type HelperTextVariant = 'default' | 'warning' | 'error';

export type HelperTextProps = {
    variant?: HelperTextVariant;
    class?: string;
    children: JSX.Element;
};

export const HelperText = (rawProps: HelperTextProps) => {
    const props = mergeProps(
        { variant: 'default' } satisfies Partial<HelperTextProps>,
        rawProps,
    );

    const variantStyles: Record<HelperTextVariant, string> = {
        default: 'text-neutral-400/80',
        warning: 'text-yellow-400/80',
        error: 'text-red-400/80',
    };

    return (
        <span class={cn('text-xs', variantStyles[props.variant], props.class)}>
            {props.children}
        </span>
    );
};
