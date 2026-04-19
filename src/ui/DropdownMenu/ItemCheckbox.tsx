import { type JSX, Show } from 'solid-js';

import { IconInterfaceCheck } from '~/icons';
import { Button } from '~/ui/Button';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type DropdownMenuItemCheckboxProps = {
    checked: boolean;
    onChange: (value: boolean) => void;
    helper?: JSX.Element;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const ItemCheckbox = (props: DropdownMenuItemCheckboxProps) => {
    const handleClick = () => {
        if (props.disabled) return;

        props.onChange(!props.checked);
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
            <div
                class={cn(
                    'flex size-4 cursor-pointer items-center rounded-sm border transition-colors duration-200 ease-out',
                    props.checked ? 'border-accent bg-accent' : 'border-border',
                )}
            >
                <IconInterfaceCheck
                    class={cn(
                        'invisible size-4 text-white transition-opacity duration-100 ease-in-out',
                        props.checked && 'visible',
                    )}
                />
            </div>

            <div class='flex flex-col items-start gap-1'>
                <div class='flex flex-row items-start gap-1'>
                    {props.children}
                </div>

                <Show when={props.helper}>
                    <HelperText>{props.helper}</HelperText>
                </Show>
            </div>
        </Button>
    );
};
