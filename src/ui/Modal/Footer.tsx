import type { JSX } from 'solid-js';

import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type ModalFooterProps = {
    class?: string;
    children: JSX.Element;
};

export const Footer = (props: ModalFooterProps) => {
    return (
        <div class='mt-auto flex flex-col gap-4'>
            <Separator class='-mx-4' />
            <div class={cn('flex flex-row items-center gap-2', props.class)}>
                {props.children}
            </div>
        </div>
    );
};
