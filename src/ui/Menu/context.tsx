import {
    type Accessor,
    createContext,
    type Setter,
    useContext,
} from 'solid-js';

export const MenuContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: (open: boolean) => void;
    disabled: Accessor<boolean | undefined>;
    closeMenu: () => void;
    triggerRef: Accessor<HTMLElement | undefined>;
    setTriggerRef: Setter<HTMLElement | undefined>;
}>();

export const useMenuContext = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error(
            'useMenuContext must be used within the MenuContext provider',
        );
    }

    return context;
};
