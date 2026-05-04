import { type JSX, splitProps } from 'solid-js';

import { Button, type ButtonProps } from '~/ui/Button';
import { cn } from '~/utils';

import { useModalContext } from './context';

export type ModalTriggerProps = {
    class?: string;
    disabled?: boolean;
    children: JSX.Element;
} & Pick<ButtonProps, 'variant' | 'appearance'>;

export const Trigger = (props: ModalTriggerProps) => {
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
