import { type Accessor, createContext, useContext } from 'solid-js';

export type ModalContextData = {
    isOpen: Accessor<boolean>;
    setIsOpen: (open: boolean) => void;

    closeModal: () => void;
};

export const ModalContext = createContext<ModalContextData>();

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModalData must be used within a ModalContext');
    }

    return context;
};
