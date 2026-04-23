import type { JSX } from 'solid-js';
import { createComputed, createSignal, on } from 'solid-js';

import { Body, Content } from '~/ui/Modal/Content';
import { ModalContext } from '~/ui/Modal/context';
import { Footer } from '~/ui/Modal/Footer';
import { Description, Header, Title } from '~/ui/Modal/Header';
import { Trigger } from '~/ui/Modal/Trigger';

export type ModalWrapperProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export const Modal = (props: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: JSX.Element;
}) => {
    const [isOpen, setInternalIsOpen] = createSignal(props.open ?? false);

    createComputed(
        on(
            () => Boolean(props.open),
            (open) => {
                setInternalIsOpen(open);
            },
            { defer: true },
        ),
    );

    const setIsOpen = (open: boolean) => {
        if (props.open === undefined) setInternalIsOpen(open);
        props.onOpenChange?.(open);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                closeModal: closeModal,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Header = Header;
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
