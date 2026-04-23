import { type JSX, mergeProps } from 'solid-js';

import { Button, type ButtonProps } from '~/ui/Button';
import { useMenuContext } from '~/ui/Menu/context';
import { cn } from '~/utils';

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

    const ctx = useMenuContext();

    return (
        <Button
            aria-expanded={ctx.isOpen()}
            aria-haspopup='listbox'
            class={cn('px-3 capitalize', props.class)}
            ref={ctx.setTriggerRef}
            role='combobox'
            {...props}
        />
    );
};
