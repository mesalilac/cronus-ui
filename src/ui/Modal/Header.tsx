import type { JSXElement } from 'solid-js';

import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type ModalHeaderProps = {
    class?: string;
    children: JSXElement;
};

export const Header = (props: ModalHeaderProps) => {
    return (
        <div class='flex flex-col gap-4'>
            <div class={cn('flex flex-col', props.class)}>{props.children}</div>
            <Separator class='-mx-4' />
        </div>
    );
};

export type ModalTitleProps = {
    class?: string;
    children: JSXElement;
};

export const Title = (props: ModalTitleProps) => {
    return (
        <h1 class={cn('font-semibold text-lg', props.class)}>
            {props.children}
        </h1>
    );
};
