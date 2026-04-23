import { type JSX, mergeProps, splitProps } from 'solid-js';

import { Button, type ButtonProps } from '~/ui/Button';
import { cn } from '~/utils';

import { useModalContext } from './context';

export interface ModalTriggerProps
    extends Pick<ButtonProps, 'variant' | 'label'> {
    class?: string;
    disabled?: boolean;
    children: JSX.Element;
}

export const Trigger = (rawProps: ModalTriggerProps) => {
    const props = mergeProps(
        { variant: 'secondary' } as ModalTriggerProps,
        rawProps,
    );

    const [local, others] = splitProps(props, ['class', 'children']);

    const ctx = useModalContext();

    return (
        <Button
            aria-haspopup='dialog'
            class={cn('px-3 capitalize', local.class)}
            onClick={() => ctx.setIsOpen(true)}
            role='combobox'
            {...others}
        >
            {local.children}
        </Button>
    );
};
