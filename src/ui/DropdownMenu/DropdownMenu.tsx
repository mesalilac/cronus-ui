import type { Accessor, JSX, Setter } from 'solid-js';
import { createComputed, createSignal, on } from 'solid-js';

import { Content } from './Content';
import { type ContextMenuPos, DropdownMenuContext } from './context';
import { Item } from './Item';
import { ItemCheckbox } from './ItemCheckbox';
import { ItemSwitch } from './ItemSwitch';
import { Label } from './Label';
import { RadioGroup } from './RadioGroup';
import { MenuSeparator } from './Separator';
import { Sub } from './Sub';
import { Trigger } from './Trigger';

export type DropdownMenuProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    contextMenuPos?: Accessor<ContextMenuPos | null>;
    setContextMenuPos?: Setter<ContextMenuPos | null>;
    children: JSX.Element;
};

export const DropdownMenu = (props: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = createSignal(
        props.open ?? props.defaultOpen ?? false,
    );

    const cleanupContextMenuPos = (isOpen: boolean) => {
        if (!isOpen && props.contextMenuPos?.() !== null)
            props.setContextMenuPos?.(null);
    };

    // sync state with props
    createComputed(
        on(
            () => Boolean(props.open),
            (isOpen) => {
                cleanupContextMenuPos(isOpen);

                setIsOpen(isOpen);
                props.onOpenChange?.(isOpen);
            },
            { defer: true },
        ),
    );

    const onOpenChange = (isOpen: boolean) => {
        cleanupContextMenuPos(isOpen);

        setIsOpen(isOpen);
        props.onOpenChange?.(isOpen);
    };

    const closeMenu = () => onOpenChange(false);

    const [triggerRef, setTriggerRef] = createSignal<
        HTMLButtonElement | undefined
    >();

    return (
        <DropdownMenuContext.Provider
            value={{
                isOpen,
                onOpenChange,
                closeMenu,
                contextMenuPos: props.contextMenuPos,
                setContextMenuPos: props.setContextMenuPos,
                triggerRef,
                setTriggerRef,
            }}
        >
            {props.children}
        </DropdownMenuContext.Provider>
    );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = Item;
DropdownMenu.ItemSwitch = ItemSwitch;
DropdownMenu.ItemCheckbox = ItemCheckbox;
DropdownMenu.Label = Label;
DropdownMenu.Separator = MenuSeparator;

DropdownMenu.Sub = Sub;
DropdownMenu.RadioGroup = RadioGroup;
