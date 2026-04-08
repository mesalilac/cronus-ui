import { type JSX, splitProps, type VoidComponent } from 'solid-js';

import { cn } from '~/utils';

export interface SeparatorProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Separator: VoidComponent<SeparatorProps> = (props) => {
    const [local, others] = splitProps(props, ['class']);

    return (
        <div class={cn('border border-neutral-800', local.class)} {...others} />
    );
};
