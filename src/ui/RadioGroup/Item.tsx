import { type JSXElement, Show } from 'solid-js';

import { Text } from '~/ui/Text';
import { cn } from '~/utils';

import { useRadioGroupContext } from './context';

export type RadioGroupItemProps = {
    value: string;
    disabled?: boolean;
    onSelect?: () => void;
    class?: string;
    children: JSXElement;
};

export const Item = (props: RadioGroupItemProps) => {
    const ctx = useRadioGroupContext();

    const isSelected = () => ctx.value() === props.value;
    const isDisabled = () => ctx.disabled() ?? props.disabled;

    const handleClick = () => {
        if (!isDisabled()) {
            ctx.onChange(props.value);
            props.onSelect?.();
        }
    };

    return (
        <div
            class={cn(
                'flex select-none items-center gap-1 text-nowrap text-text-secondary capitalize',
                isDisabled() && 'opacity-50',
                props.class,
            )}
            onClick={handleClick}
            role='none'
        >
            <div
                class={cn(
                    'flex size-4 items-center justify-center rounded-full border bg-surface-3/30 transition-colors duration-200 ease-in-out',
                    isSelected() ? 'border-accent bg-accent' : 'border-border',
                )}
            >
                <div
                    class='size-2 rounded-full bg-white transition-opacity duration-100 ease-in-out'
                    style={{
                        opacity: isSelected() ? '1' : '0',
                    }}
                />
            </div>
            {props.children}
        </div>
    );
};
