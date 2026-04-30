import { type ComponentProps, splitProps, type VoidComponent } from 'solid-js';

import { cn } from '~/utils';

export type SkeletonProps = ComponentProps<'div'>;

export const Skeleton: VoidComponent<SkeletonProps> = (props) => {
    const [local, others] = splitProps(props, ['class']);

    return (
        <div
            class={cn(
                'animate-pulse rounded-default bg-surface-3/80',
                local.class,
            )}
            data-slot='skeleton'
            {...others}
        />
    );
};
