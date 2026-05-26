import {
    type ComponentProps,
    type JSXElement,
    mergeProps,
    type ParentComponent,
    splitProps,
} from 'solid-js';

import { cn } from '~/utils';

export type BadgeVariant =
    | 'default'
    | 'success'
    | 'danger'
    | 'warning'
    | 'outline';
export type BadgeSize = 'icon' | 'sm' | 'md' | 'lg';

export type BadgeProps = ComponentProps<'span'> & {
    ref?: HTMLSpanElement | ((el: HTMLSpanElement) => void);
    variant?: BadgeVariant;
    size?: BadgeSize;
    class?: string;
    children: JSXElement;
};

const VARIANT_STYLES: Record<BadgeVariant, string> = {
    default: cn('bg-surface-3/20 text-text-muted'),
    success: cn('bg-success/20 text-text-success'),
    warning: cn('bg-warning/20 text-text-warning'),
    danger: cn('bg-danger/20 text-text-danger'),
    outline: cn('text-text-muted'),
};

const SIZE_STYLES: Record<BadgeSize, string> = {
    sm: cn('px-1'),
    md: cn('px-2'),
    lg: cn('px-4'),
    icon: cn('rounded-full px-1'),
};

export const Badge: ParentComponent<BadgeProps> = (rawProps) => {
    const props = mergeProps(
        { variant: 'default', size: 'md' } satisfies Partial<BadgeProps>,
        rawProps,
    );

    const [local, others] = splitProps(props, [
        'class',
        'ref',
        'variant',
        'size',
    ]);

    const baseStyles = cn(
        'inline-flex select-none items-center justify-center gap-1 rounded-default border border-current/30 py-0.5 font-medium text-xs',
    );

    return (
        <span
            class={cn(
                baseStyles,
                VARIANT_STYLES[local.variant],
                SIZE_STYLES[local.size],
                local.class,
            )}
            ref={local.ref}
            {...others}
        />
    );
};
