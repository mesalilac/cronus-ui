import {
    type Accessor,
    createContext,
    type Setter,
    useContext,
} from 'solid-js';

import type { CommonPositionArea } from '~/ui/Popover';

export type SelectContext = {
    onChange: (value: string) => void;
    autoClose: Accessor<boolean | undefined>;
    value: Accessor<string | undefined>;
    placement: Accessor<CommonPositionArea>;
    placementFallback: Accessor<CommonPositionArea[]>;

    isOpen: Accessor<boolean>;
    setIsOpen: Setter<boolean>;
    triggerRef: Accessor<HTMLButtonElement | undefined>;
    setTriggerRef: Setter<HTMLButtonElement | undefined>;
};

export const SelectContext = createContext<SelectContext>();

export const useSelectContext = () => {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error('useSelectContext must be used within a SelectContext');
    }

    return context;
};
