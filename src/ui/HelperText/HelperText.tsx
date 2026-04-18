import { type JSX, mergeProps } from 'solid-js';

import { cn } from '~/utils';

export type HelperTextVariant = 'default' | 'warning' | 'danger';

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
        default: cn('text-text-muted/80'),
        warning: cn('text-warning-text/80'),
        danger: cn('text-danger-text/80'),
    };

    return (
        <span class={cn('text-xs', variantStyles[props.variant], props.class)}>
            {props.children}
        </span>
    );
};
