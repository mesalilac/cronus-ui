import {
    createComputed,
    createEffect,
    createSignal,
    type JSX,
    on,
    onCleanup,
} from 'solid-js';

import { MenuContext } from '~/ui/Menu/context';
import { Item } from '~/ui/Menu/Item';
import { ItemCheckbox } from '~/ui/Menu/ItemCheckbox';
import { ItemSwitch } from '~/ui/Menu/ItemSwitch';
import { Label } from '~/ui/Menu/Label';
import { RadioGroup } from '~/ui/Menu/RadioGroup';
import { MenuSeparator } from '~/ui/Menu/Separator';
import { Sub } from '~/ui/Menu/Sub';

export type MenuProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: JSX.Element;
};

export type MenuCompound = {
    (props: MenuProps): JSX.Element;

    Item: typeof Item;
    ItemSwitch: typeof ItemSwitch;
    ItemCheckbox: typeof ItemCheckbox;
    Label: typeof Label;
    Separator: typeof MenuSeparator;
    Sub: typeof Sub;
    RadioGroup: typeof RadioGroup;
};

export const Menu: MenuCompound = (props) => {
    const [isOpen, setInternalIsOpen] = createSignal(
        props.open ?? props.defaultOpen ?? false,
    );

    // sync state with props
    createComputed(
        on(
            () => Boolean(props.open),
            (isOpen) => {
                setInternalIsOpen(isOpen);
                props.onOpenChange?.(isOpen);
            },
            { defer: true },
        ),
    );

    createEffect(() => {
        if (isOpen()) {
            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
            });
        }
    });

    const setIsOpen = (isOpen: boolean) => {
        setInternalIsOpen(isOpen);
        props.onOpenChange?.(isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    const [triggerRef, setTriggerRef] = createSignal<HTMLElement | undefined>();

    return (
        <MenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                closeMenu,
                triggerRef,
                setTriggerRef,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

Menu.Item = Item;
Menu.ItemSwitch = ItemSwitch;
Menu.ItemCheckbox = ItemCheckbox;
Menu.Label = Label;
Menu.Separator = MenuSeparator;

Menu.Sub = Sub;
Menu.RadioGroup = RadioGroup;
