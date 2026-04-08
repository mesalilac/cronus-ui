import {
    type Accessor,
    createContext,
    type Setter,
    useContext,
} from 'solid-js';

import type { TimeoutHandle } from '~/types';

export const SubMenuContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: Setter<boolean>;
    closeMenu: () => void;
    triggerRef: Accessor<HTMLButtonElement | undefined>;
    setTriggerRef: Setter<HTMLButtonElement | undefined>;
    closeTimer: Accessor<TimeoutHandle | undefined>;
    setCloseTimer: Setter<TimeoutHandle | undefined>;
}>();

export const useSubMenuContext = () => {
    const context = useContext(SubMenuContext);

    if (!context) {
        throw new Error(
            'useContext must be used within the correct context provider',
        );
    }

    return context;
};
