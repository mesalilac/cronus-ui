import type { JSX } from 'solid-js';

import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type ModalHeaderProps = {
    class?: string;
    children: JSX.Element;
};

export const Header = (props: ModalHeaderProps) => {
    return (
        <div class='flex flex-col gap-4'>
            <div class={cn('flex flex-col', props.class)}>{props.children}</div>
            <Separator class='-mx-4' />
        </div>
    );
};

export type ModalHeaderTitleProps = {
    class?: string;
    children: JSX.Element;
};

export const Title = (props: ModalHeaderTitleProps) => {
    return (
        <h1 class={cn('font-semibold text-lg', props.class)}>
            {props.children}
        </h1>
    );
};

export type ModalHeaderDescriptionProps = {
    class?: string;
    children: JSX.Element;
};

export const Description = (props: ModalHeaderDescriptionProps) => {
    return (
        <p class={cn('text-sm text-text-muted', props.class)}>
            {props.children}
        </p>
    );
};
