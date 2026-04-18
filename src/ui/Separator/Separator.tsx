import type { VoidComponent } from 'solid-js';

import { cn } from '~/utils';

export type SeparatorProps = {
    class?: string;
};

export const Separator: VoidComponent<SeparatorProps> = (props) => {
    return <div class={cn('border border-border/60', props.class)} />;
};
