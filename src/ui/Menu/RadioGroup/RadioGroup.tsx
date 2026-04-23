import { createMemo, type JSX } from 'solid-js';

import { RadioGroupContext } from './context';
import { Item } from './Item';

export type DropdownMenuRadioGroupProps = {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    children: JSX.Element;
};

export const RadioGroup = (props: DropdownMenuRadioGroupProps) => {
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
            {props.children}
        </RadioGroupContext.Provider>
    );
};

RadioGroup.Item = Item;
