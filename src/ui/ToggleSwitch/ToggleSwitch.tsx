import { type JSX, Show } from 'solid-js';

import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type ToggleSwitchProps = {
    checked?: boolean;
    onChange: (value: boolean) => void;
    label?: JSX.Element;
    helper?: JSX.Element;
    disabled?: boolean;
    class?: string;
    trackClass?: string;
    thumbClass?: string;
};

export const ToggleSwitch = (props: ToggleSwitchProps) => {
    const handleToggle = () => {
        if (props.disabled) return;

        props.onChange(!props.checked);
    };

    return (
        <div class='flex flex-col gap-1'>
            <div
                aria-checked={props.checked}
                aria-disabled={props.disabled}
                class={cn(
                    'flex flex-row items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    props.disabled && 'opacity-60',
                    props.class,
                )}
                onClick={handleToggle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleToggle();
                    }
                }}
                role='switch'
                tabIndex={0}
            >
                <div
                    class={cn(
                        'flex h-5 w-9 cursor-pointer items-center rounded-full border border-border bg-surface-3/30 p-0.5 transition-colors',
                        props.checked && 'border-accent bg-accent',
                        props.disabled && 'cursor-auto',
                        props.trackClass,
                    )}
                >
                    <div
                        class={cn(
                            'h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-out',
                            props.checked && 'translate-x-4',
                            props.thumbClass,
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
