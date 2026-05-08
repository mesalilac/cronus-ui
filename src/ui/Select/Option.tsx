import { type JSX, Show } from 'solid-js';

import { IconInterfaceCheck } from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

import { useSelectContext } from './context';

export type SelectOptionProps = {
    value: string;
    class?: string;
    disabled?: boolean;
    selected?: boolean;
    children: JSX.Element;
};

export const Option = (props: SelectOptionProps) => {
    const ctx = useSelectContext();

    const isSelected = () => props.selected ?? ctx.value() === props.value;

    return (
        <Button
            appearance={isSelected() ? 'primary' : 'secondary'}
            class={cn(
                'relative justify-between text-nowrap px-2 py-1 text-text-secondary before:absolute before:inset-x-0 before:inset-y-1 before:size-full before:content-[""]',
                props.class,
            )}
            disabled={props.disabled}
            onClick={() => {
                ctx.onChange(props.value);

                if (ctx.autoClose) ctx.setIsOpen(false);
            }}
            variant={isSelected() ? 'solid' : 'ghost'}
        >
            <div class='flex gap-1'>{props.children}</div>
            <Show when={isSelected()}>
                <IconInterfaceCheck />
            </Show>
        </Button>
    );
};
