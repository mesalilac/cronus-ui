import { createSignal, type JSXElement } from 'solid-js';

import { Content } from './Content';
import { SubMenuContext } from './context';
import { Trigger } from './Trigger';

export type DropdownMenuSubProps = {
    children: JSXElement;
};

export const Sub = (props: DropdownMenuSubProps) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const [triggerRef, setTriggerRef] = createSignal<HTMLButtonElement>();

    return (
        <SubMenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                closeMenu: () => setIsOpen(false),
                triggerRef,
                setTriggerRef,
            }}
        >
            {props.children}
        </SubMenuContext.Provider>
    );
};

Sub.Trigger = Trigger;
Sub.Content = Content;
