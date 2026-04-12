import type { JSX } from 'solid-js';

import { cn } from '~/utils';

export const Content = (props: { class?: string; children: JSX.Element }) => {
    return (
        <div class={cn('flex flex-col gap-4 overflow-y-auto p-2', props.class)}>
            {props.children}
        </div>
    );
};
