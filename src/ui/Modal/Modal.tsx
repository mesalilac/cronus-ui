import gsap from 'gsap';
import type { JSX } from 'solid-js';
import { createEffect, onCleanup, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Transition } from 'solid-transition-group';

import { Content } from '~/ui/Modal/Content';
import { ModalContext } from '~/ui/Modal/context';
import { Footer } from '~/ui/Modal/Footer';
import { Header } from '~/ui/Modal/Header';
import { cn } from '~/utils';

export type ModalWrapperProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const Modal = (props: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    class?: string;
    children: JSX.Element;
}) => {
    const onEnterAnim = (el: Element, done: () => void) => {
        const overlay = el;
        const modalWindow = overlay.querySelector('[data-slot="modal-window"]');

        const tl = gsap.timeline({ onComplete: done });

        tl.fromTo(
            overlay,
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                duration: 0.15,
                ease: 'power1.out',
            },
        ).fromTo(
            modalWindow,
            {
                autoAlpha: 0,
                y: 16,
                scale: 0.96,
            },
            {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power1.out',
            },
            '<',
        );
    };

    const onExitAnim = (el: Element, done: () => void) => {
        const overlay = el;
        const modalWindow = overlay.querySelector('[data-slot="modal-window"]');

        const tl = gsap.timeline({ onComplete: done });

        tl.to(modalWindow, {
            autoAlpha: 0,
            scale: 0.96,
            y: 12,
            duration: 0.18,
            ease: 'power1.in',
        }).to(
            overlay,
            {
                autoAlpha: 0,
                duration: 0.12,
                ease: 'power1.in',
            },
            '<',
        );
    };

    const closeModal = () => props.onOpenChange(false);

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    createEffect(() => {
        if (props.open) {
            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            document.addEventListener('keydown', handleKeydown);

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
                document.removeEventListener('keydown', handleKeydown);
            });
        }
    });

    return (
        <Portal>
            <Transition onEnter={onEnterAnim} onExit={onExitAnim}>
                <Show when={props.open}>
                    <div
                        class='fixed inset-0 z-50 flex items-center justify-center rounded bg-black/30'
                        data-slot='modal-overlay'
                        onMouseDown={closeModal}
                        role='none'
                    >
                        <div
                            class={cn(
                                'pointer-events-auto relative flex size-9/12 flex-col gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 p-4 text-black shadow-lg backdrop-blur-sm will-change-transform dark:text-white',
                                props.class,
                            )}
                            data-slot='modal-window'
                            onMouseDown={(e) => e.stopPropagation()}
                            role='none'
                        >
                            <ModalContext.Provider
                                value={{
                                    open: props.open,
                                    closeModal: closeModal,
                                }}
                            >
                                {props.children}
                            </ModalContext.Provider>
                        </div>
                    </div>
                </Show>
            </Transition>
        </Portal>
    );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
