import type { JSX } from 'solid-js';

import { cn } from '~/utils';

export type HelperTextProps = {
    text: JSX.Element;
    class?: string;
};

export const HelperText = (props: HelperTextProps) => {
    return (
        <span class={cn('text-neutral-500/80 text-xs', props.class)}>
            {props.text}
        </span>
    );
};
