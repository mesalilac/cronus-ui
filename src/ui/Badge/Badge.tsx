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
        default: cn('bg-neutral-600/10 text-neutral-400'),
        success: cn('bg-green-500/10 text-green-400'),
        warning: cn('bg-yellow-500/10 text-yellow-400'),
        danger: cn('bg-red-500/10 text-red-400'),
        outline: cn('text-neutral-400'),
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
