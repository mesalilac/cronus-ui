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
            <div
                class={cn(
                    'sticky top-0 z-10 -mx-2 -my-2 flex flex-col gap-1 bg-surface-2 p-2',
                    props.class,
                )}
            >
                {props.children}
            </div>
            <Separator class='my-2' />
        </>
    );
};
