import { type JSX, mergeProps, Show } from 'solid-js';

import { Button } from '~/ui/Button';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

import { useDropdownMenuContext } from './context';

export type DropdownMenuItemProps = {
    onClick?: () => void;
    class?: string;
    autoClose?: boolean;
    helper?: JSX.Element;
    disabled?: boolean;
    children: JSX.Element;
};

export const Item = (rawProps: DropdownMenuItemProps) => {
    const props = mergeProps(
        { autoClose: true } as DropdownMenuItemProps,
        rawProps,
    );

    const ctx = useDropdownMenuContext();

    const handleClick = () => {
        if (props.autoClose) ctx.closeMenu();

        props.onClick?.();
    };

    return (
        <Button
            class={cn(
                'w-full select-none text-nowrap text-neutral-200 capitalize disabled:bg-transparent',
                props.class,
            )}
            disabled={props.disabled}
            onClick={handleClick}
            variant='ghost'
        >
            <div class='flex flex-col items-start gap-1'>
                <div class='flex flex-row items-start gap-1'>
                    {props.children}
                </div>

                <Show when={props.helper}>
                    <HelperText text={props.helper} />
                </Show>
            </div>
        </Button>
    );
};
