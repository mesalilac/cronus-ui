import {
    type ComponentProps,
    mergeProps,
    Show,
    type VoidComponent,
} from 'solid-js';

import type { PartialComponentProps } from '~/types';
import { cn } from '~/utils';

type StatusDotVariant =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

type StatusDotSize = 'sm' | 'md' | 'lg';

const StatusDotVariantStyles: Record<StatusDotVariant, string> = {
    primary: cn('bg-accent'),
    secondary: cn('bg-text-muted'),
    info: cn('bg-info'),
    success: cn('bg-success'),
    warning: cn('bg-warning'),
    danger: cn('bg-danger'),
};

const StatusDotSizeStyles: Record<StatusDotSize, string> = {
    sm: cn('size-2'),
    md: cn('size-4'),
    lg: cn('size-6'),
};

export const StatusDot: VoidComponent<
    ComponentProps<'div'> & {
        variant?: StatusDotVariant;
        size?: StatusDotSize;
        ping?: boolean;
        class?: string;
    }
> = (rawProps) => {
    const props = mergeProps(
        {
            variant: 'secondary',
            size: 'md',
        } satisfies PartialComponentProps<typeof StatusDot>,
        rawProps,
    );

    const styles = () =>
        cn(
            StatusDotVariantStyles[props.variant],
            StatusDotSizeStyles[props.size],
        );

    return (
        <div class={cn('inline-grid shrink-0 *:[grid-area:1/1]')}>
            <Show when={props.ping}>
                <div class={cn('animate-ping rounded-full', styles())} />
            </Show>
            <div class={cn('rounded-full', styles())} />
        </div>
    );
};
