import type { JSX } from 'solid-js';

import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type SelectFilterProps = {
    class?: string;
    children: JSX.Element;
};

export const Filter = (props: SelectFilterProps) => {
    return (
        <>
            <div class={cn('flex flex-col gap-2 bg-surface-2', props.class)}>
                {props.children}
            </div>
            <Separator class='-mx-2 my-0.5' />
        </>
    );
};
