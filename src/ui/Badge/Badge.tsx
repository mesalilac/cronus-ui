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

    const variantStyles: Record<BadgeVariant, string> = {
        default: cn('border-neutral-600/30 bg-neutral-600/10 text-neutral-400'),
        success: cn('border-green-600/30 bg-green-500/10 text-green-400'),
        warning: cn('border-yellow-600/30 bg-yellow-500/10 text-yellow-400'),
        danger: cn('border-red-600/30 bg-red-500/10 text-red-400'),
        outline: cn('border-neutral-600 text-neutral-400'),
    };

    const baseStyles = cn(
        'inline-flex select-none items-center justify-center gap-1 rounded-full border px-2 py-0.5 font-medium text-xs',
    );

    return (
        <span
            class={cn(baseStyles, props.class, variantStyles[props.variant])}
            ref={props.ref}
        >
            {props.children}
        </span>
    );
};
