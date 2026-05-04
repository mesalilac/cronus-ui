import type { JSX } from 'solid-js';

import { IconArrowCaretDownMd, IconArrowCaretUpMd } from '~/icons';
import { Button, type ButtonProps } from '~/ui/Button';
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
                'min-w-52 justify-between px-3 capitalize',
                ctx.isOpen() && 'outline outline-accent',
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
