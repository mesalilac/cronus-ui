import { type JSX, mergeProps, type ParentComponent } from 'solid-js';

import { cn } from '~/utils';

export type BadgeVariant =
    | 'default'
    | 'success'
    | 'danger'
    | 'warning'
    | 'outline';

export type BadgeProps = {
    ref?: HTMLSpanElement | ((el: HTMLSpanElement) => void);
    variant?: BadgeVariant;
    class?: string;
    children: JSX.Element;
};

export const Badge: ParentComponent<BadgeProps> = (rawProps) => {
    const props = mergeProps(
        { variant: 'default' } satisfies Partial<BadgeProps>,
        rawProps,
    );

    const baseStyles = cn(
        'inline-flex select-none items-center justify-center gap-1 rounded-full border border-current/30 px-2 py-0.5 font-medium text-xs',
    );

    const variantStyles: Record<BadgeVariant, string> = {
        default: cn('bg-surface-3/20 text-text-muted'),
        success: cn('bg-success/20 text-text-success'),
        warning: cn('bg-warning/20 text-text-warning'),
        danger: cn('bg-danger/20 text-text-danger'),
        outline: cn('text-text-muted'),
    };

    return (
        <span
            class={cn(baseStyles, variantStyles[props.variant], props.class)}
            ref={props.ref}
        >
            {props.children}
        </span>
    );
};
