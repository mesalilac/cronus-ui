import type { JSX } from 'solid-js';

import { cn } from '~/utils';

export type DropdownMenuLabelProps = {
    class?: string;
    children: JSX.Element;
};

export const Label = (props: DropdownMenuLabelProps) => {
    return (
        <div class='px-4 py-2'>
            <span class={cn('font-bold text-sm', props.class)}>
                {props.children}
            </span>
        </div>
    );
};
