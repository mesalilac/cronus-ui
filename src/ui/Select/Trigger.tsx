import { type JSX, Match, Switch } from 'solid-js';

import { IconArrowCaretDownMd, IconArrowCaretUpMd } from '~/icons';
import { Button, type ButtonProps } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { cn } from '~/utils';

import { useSelectContext } from './context';

export type SelectTriggerProps = {
    class?: string;
    disabled?: boolean;
    children?: JSX.Element;
} & Pick<ButtonProps, 'variant' | 'appearance'>;

export const Trigger = (props: SelectTriggerProps) => {
    const ctx = useSelectContext();

    return (
        <Button
            appearance={props.appearance}
            aria-expanded={ctx.isOpen()}
            aria-haspopup='listbox'
            class={cn(
                'min-w-52 justify-between bg-surface-3/30 p-1 px-3 py-2.5 capitalize outline outline-border',
                ctx.isOpen() && 'outline-accent',
                props.class,
            )}
            disabled={props.disabled}
            ref={ctx.setTriggerRef}
            role='combobox'
            variant={props.variant}
        >
            <div class='flex flex-row gap-2'>
                {props.children ?? (ctx.value() || 'Choose an option')}
            </div>
            <div class='flex flex-col'>
                <IconArrowCaretUpMd class='-mb-2' />
                <IconArrowCaretDownMd />
            </div>
        </Button>
    );
};
