import { type JSXElement, mergeProps, Show } from 'solid-js';

import { Button } from '~/ui/Button';
import { Text } from '~/ui/Text';
import { cn } from '~/utils';

import { useMenuContext } from './context';

export type DropdownMenuItemProps = {
    onClick?: () => void;
    class?: string;
    autoClose?: boolean;
    helper?: JSXElement;
    disabled?: boolean;
    children: JSXElement;
};

export const Item = (rawProps: DropdownMenuItemProps) => {
    const props = mergeProps(
        { autoClose: true } as DropdownMenuItemProps,
        rawProps,
    );

    const ctx = useMenuContext();

    const handleClick = () => {
        if (props.autoClose) ctx.closeMenu();

        props.onClick?.();
    };

    return (
        <Button
            class={cn(
                'w-full select-none text-nowrap text-text-secondary capitalize disabled:bg-transparent',
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
                    <Text variant='muted'>{props.helper}</Text>
                </Show>
            </div>
        </Button>
    );
};
