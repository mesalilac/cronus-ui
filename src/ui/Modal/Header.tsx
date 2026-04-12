import type { JSX } from 'solid-js';

import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export const Header = (props: { title: JSX.Element; class?: string }) => {
    return (
        <>
            <span class={cn('px-2 text-xl capitalize', props.class)}>
                {props.title}
            </span>
            <Separator class='mb-4' />
        </>
    );
};
