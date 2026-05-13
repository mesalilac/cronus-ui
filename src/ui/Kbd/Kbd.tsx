import { type ComponentProps, splitProps } from 'solid-js';

import { cn } from '~/utils';

export const Kbd = (rawProps: ComponentProps<'kbd'>) => {
    const [local, others] = splitProps(rawProps, ['class', 'children']);

    return (
        <kbd
            class={cn(
                "pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-default border border-border bg-surface-3/30 px-1 font-medium font-sans text-text-muted text-xs [&_svg:not([class*='size-'])]:size-3",
                local.class,
            )}
            data-slot='kbd'
            {...others}
        >
            {local.children}
        </kbd>
    );
};

export const KbdGroup = (rawProps: ComponentProps<'kbd'>) => {
    const [local, others] = splitProps(rawProps, ['class', 'children']);

    return (
        <kbd
            class={cn(
                'inline-flex items-center gap-1 text-text-secondary',
                local.class,
            )}
            data-slot='kbd-group'
            {...others}
        >
            {local.children}
        </kbd>
    );
};
