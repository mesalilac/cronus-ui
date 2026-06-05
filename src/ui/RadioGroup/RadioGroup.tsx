import { createMemo, type JSXElement } from 'solid-js';

import { cn } from '~/utils';

import { RadioGroupContext } from './context';
import { Item } from './Item';

export type RadioGroupProps = {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    class?: string;
    children: JSXElement;
};

export const RadioGroup = (props: RadioGroupProps) => {
    const value = createMemo(() => props.value);
    const disabled = createMemo(() => props.disabled);

    return (
        <RadioGroupContext.Provider
            value={{
                value: value,
                onChange: props.onChange,
                disabled: disabled,
            }}
        >
            <div class={cn('flex gap-4', props.class)}>{props.children}</div>
        </RadioGroupContext.Provider>
    );
};

RadioGroup.Item = Item;
