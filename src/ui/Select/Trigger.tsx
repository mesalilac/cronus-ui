import { type JSX, mergeProps } from 'solid-js';

import { IconArrowCaretDownMd, IconArrowCaretUpMd } from '~/icons';
import { Button, type ButtonProps } from '~/ui/Button';
import { cn } from '~/utils';

import { useSelectContext } from './context';

export interface SelectTriggerProps extends Pick<ButtonProps, 'variant'> {
    class?: string;
    disabled?: boolean;
    children?: JSX.Element;
}

export const Trigger = (rawProps: SelectTriggerProps) => {
    const props = mergeProps(
        { variant: 'secondary' } satisfies SelectTriggerProps,
        rawProps,
    );

    const ctx = useSelectContext();

    return (
        <Button
            aria-expanded={ctx.isOpen()}
            aria-haspopup='listbox'
            class={cn(
                'justify-between px-3 capitalize',
                ctx.isOpen() && 'bg-surface-3/30 hover:bg-surface-3/30',
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
