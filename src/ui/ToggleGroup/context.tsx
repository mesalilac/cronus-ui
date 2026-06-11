import { type Accessor, createContext, useContext } from 'solid-js';

import type { ToggleGroupOrientation } from '~/ui/ToggleGroup';

export const ToggleGroupContext = createContext<{
    isSelected: (value: string) => boolean;
    toggle: (value: string) => void;
    disabled: Accessor<boolean | undefined>;
    orientation: Accessor<ToggleGroupOrientation>;
}>();

export const useToggleGroupContext = () => {
    const context = useContext(ToggleGroupContext);

    if (!context) {
        throw new Error(
            'useContext must be used within the correct context provider',
        );
    }

    return context;
};
