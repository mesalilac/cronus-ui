import { createMemo, type JSXElement, mergeProps } from 'solid-js';

import { cn } from '~/utils';

import { ToggleGroupContext } from './context';
import { Item } from './Item';

export type ToggleGroupOrientation = 'horizontal' | 'vertical';

type SingleProps = {
    type: 'single';
    value: string;
    onChange: (value: string) => void;
};

type MultipleProps = {
    type: 'multiple';
    value: string[];
    onChange: (value: string[]) => void;
};

type BaseProps = {
    orientation?: ToggleGroupOrientation;
    class?: string;
    disabled?: boolean;
    children: JSXElement;
};

export type ToggleGroupProps = BaseProps & (SingleProps | MultipleProps);

export const ToggleGroup = (rawProps: ToggleGroupProps) => {
    const props = mergeProps(
        {
            orientation: 'horizontal',
        } satisfies Partial<BaseProps>,
        rawProps,
    );
    const disabled = () => createMemo(() => props.disabled);

    const isSelected = (value: string): boolean => {
        if (props.type === 'single') return props.value === value;

        return props.value.includes(value) ?? false;
    };

    const toggle = (value: string) => {
        if (props.type === 'single') {
            props.onChange(value);
            return;
        }

        const current = props.value;
        const exists = current.includes(value);

        const next = exists
            ? current.filter((v) => v !== value)
            : [...current, value];

        props.onChange(next);
    };

    return (
        <ToggleGroupContext.Provider
            value={{
                isSelected: isSelected,
                toggle: toggle,
                disabled: disabled(),
                orientation: () => props.orientation,
            }}
        >
            <div
                class={cn(
                    'flex rounded-default outline outline-border',
                    'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:divide-x data-[orientation=horizontal]:divide-border',
                    'data-[orientation=vertical]:flex-col data-[orientation=vertical]:divide-y data-[orientation=vertical]:divide-border',
                    props.class,
                )}
                data-orientation={props.orientation}
            >
                {props.children}
            </div>
        </ToggleGroupContext.Provider>
    );
};

ToggleGroup.Item = Item;
