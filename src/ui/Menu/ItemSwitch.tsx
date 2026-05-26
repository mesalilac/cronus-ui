import { type JSXElement, Show } from 'solid-js';

import { Button } from '~/ui/Button';
import { Text } from '~/ui/Text';
import { ToggleSwitch } from '~/ui/ToggleSwitch';
import { cn } from '~/utils';

export type DropdownMenuItemSwitchProps = {
    checked?: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    helper?: JSXElement;
    label?: JSXElement;
    class?: string;
    children: JSXElement;
};

export const ItemSwitch = (props: DropdownMenuItemSwitchProps) => {
    return (
        <Button
            class={cn(
                'w-full select-none text-nowrap text-text-secondary capitalize disabled:bg-transparent',
                props.class,
            )}
            disabled={props.disabled}
            onClick={() => props.onChange(!props.checked)}
            variant='ghost'
        >
            <div class='flex w-full flex-col items-start gap-1'>
                <div class='flex w-full justify-between'>
                    <div class='flex flex-row gap-1'>{props.children}</div>
                    <ToggleSwitch
                        checked={props.checked}
                        disabled={props.disabled}
                        label={props.label}
                        onChange={() => {}}
                    />
                </div>

                <Show when={props.helper}>
                    <Text variant='muted'>{props.helper}</Text>
                </Show>
            </div>
        </Button>
    );
};
