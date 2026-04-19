import { type JSX, Show, type VoidComponent } from 'solid-js';

import { IconInterfaceCheck } from '~/icons';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type CheckboxProps = {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    helper?: JSX.Element;
    label?: JSX.Element;
};

export const Checkbox: VoidComponent<CheckboxProps> = (props) => {
    return (
        <div class='flex flex-col gap-1'>
            <div
                class='flex select-none items-center gap-2'
                onClick={() => props.onChange(!props.checked)}
                role='none'
            >
                <div
                    class={cn(
                        'flex size-4 cursor-pointer items-center rounded-sm border transition-colors duration-200 ease-out',
                        props.checked
                            ? 'border-accent bg-accent'
                            : 'border-border',
                    )}
                >
                    <IconInterfaceCheck
                        class={cn(
                            'invisible size-4 text-white transition-opacity duration-100 ease-in-out',
                            props.checked && 'visible',
                        )}
                    />
                </div>
                <Show when={props.label}>
                    <span class='select-none text-sm'>{props.label}</span>
                </Show>
            </div>
            <Show when={props.helper}>
                <HelperText>{props.helper}</HelperText>
            </Show>
        </div>
    );
};
