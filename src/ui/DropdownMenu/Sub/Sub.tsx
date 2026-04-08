import { createSignal, type JSX } from 'solid-js';

import type { TimeoutHandle } from '~/types';

import { Content } from './Content';
import { SubMenuContext } from './context';
import { Trigger } from './Trigger';

export type DropdownMenuSubProps = {
    children: JSX.Element;
};

export const Sub = (props: DropdownMenuSubProps) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const [triggerRef, setTriggerRef] = createSignal<HTMLButtonElement>();

    const [closeTimer, setCloseTimer] = createSignal<TimeoutHandle>();

    return (
        <SubMenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                closeMenu: () => setIsOpen(false),
                triggerRef,
                setTriggerRef,
                closeTimer,
                setCloseTimer,
            }}
        >
            {props.children}
        </SubMenuContext.Provider>
    );
};

Sub.Trigger = Trigger;
Sub.Content = Content;
