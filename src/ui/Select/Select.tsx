import {
    createMemo,
    createSignal,
    type JSXElement,
    mergeProps,
    onMount,
} from 'solid-js';

import type { CommonPositionArea } from '~/ui/Popover';

import { Content, SelectList } from './Content';
import { SelectContext } from './context';
import { Filter } from './Filter';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import { Searchbar } from './Searchbar';
import { Trigger } from './Trigger';

export type SelectProps = {
    onChange: (value: string) => void;
    /**
     * @default true
     */
    autoClose?: boolean;
    value?: string;
    placement?: CommonPositionArea;
    placementFallback?: CommonPositionArea[];
    /** Enables persistence of the selected value after refresh */
    persistKey?: string;
    children: JSXElement;
};

const getItemKey = (persistKey: string | undefined): string | undefined => {
    const key = persistKey?.trim().toLocaleUpperCase();
    if (!persistKey) return;

    return `SELECT_MENU_${key}`;
};

export const Select = (rawProps: SelectProps) => {
    const props = mergeProps(
        {
            autoClose: true,
            placement: 'bottom-start',
            placementFallback: [
                'right-start',
                'left-start',
                'top-start',
                'bottom-start',
            ] as CommonPositionArea[],
        } satisfies Partial<SelectProps>,
        rawProps,
    );

    const [isOpen, setIsOpen] = createSignal(false);

    const [triggerRef, setTriggerRef] = createSignal<
        HTMLButtonElement | undefined
    >(undefined);

    onMount(() => {
        const itemKey = getItemKey(props.persistKey);
        if (!itemKey) return;

        const value = localStorage.getItem(itemKey);
        if (!value) return;

        props.onChange(value);
    });

    const onChange = (value: string) => {
        const itemKey = getItemKey(props.persistKey);
        if (itemKey) localStorage.setItem(itemKey, value);

        props.onChange(value);
    };

    const value = createMemo(() => props.value);

    return (
        <SelectContext.Provider
            value={{
                onChange,
                autoClose: () => props.autoClose,
                value,
                isOpen,
                setIsOpen,
                placement: () => props.placement,
                placementFallback: () => props.placementFallback,
                triggerRef: triggerRef,
                setTriggerRef: setTriggerRef,
            }}
        >
            {props.children}
        </SelectContext.Provider>
    );
};

Select.Trigger = Trigger;
Select.Content = Content;
Select.List = SelectList;
Select.OptionGroup = OptionGroup;
Select.Option = Option;
Select.Filter = Filter;
Select.Searchbar = Searchbar;
