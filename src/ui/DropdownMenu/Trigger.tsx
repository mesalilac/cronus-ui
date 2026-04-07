import { type JSX, mergeProps } from 'solid-js';

import { Button, type ButtonProps } from '@/ui/Button';
import { cn } from '@/utils';

import { useDropdownMenuContext } from './context';

export interface DropdownMenuTriggerProps
    extends Pick<ButtonProps, 'variant' | 'label'> {
    class?: string;
    disabled?: boolean;
    children: JSX.Element;
}

export const Trigger = (rawProps: DropdownMenuTriggerProps) => {
    const props = mergeProps(
        { variant: 'secondary' } as DropdownMenuTriggerProps,
        rawProps,
    );

    const ctx = useDropdownMenuContext();

    return (
        <Button
            aria-expanded={ctx.isOpen()}
            aria-haspopup='listbox'
            class={cn('px-3 text-white capitalize', props.class)}
            ref={ctx.setTriggerRef}
            role='combobox'
            {...props}
        />
    );
};
