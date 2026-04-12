import gsap from 'gsap';
import type { JSX } from 'solid-js';
import { createEffect, createSignal, onCleanup, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

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
    let modalOverlayRef!: HTMLDivElement;
    let modalContentRef!: HTMLDivElement;

    const [shouldRender, setShouldRender] = createSignal(false);

    const animateOut = () => {
        if (!modalOverlayRef || !modalContentRef) return;

        const gsapCtx = gsap.context(() => {
            gsap.to(modalContentRef, {
                autoAlpha: 0,
                scale: 0.95,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => {
                    setShouldRender(false);
                    props.onOpenChange(false);
                },
            });
        });

        onCleanup(() => {
            gsapCtx.revert();
        });
    };

    const closeModal = () => animateOut();

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    createEffect(() => {
        if (props.open) {
            setShouldRender(true);
            requestAnimationFrame(() => {
                if (modalOverlayRef && modalContentRef) {
                    const gsapCtx = gsap.context(() => {
                        gsap.from(modalContentRef, {
                            scale: 0.95,
                            autoAlpha: 0,
                            duration: 0.2,
                            ease: 'power2.out',
                        });
                    });

                    onCleanup(() => {
                        gsapCtx.revert();
                    });
                }
            });

            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            document.addEventListener('keydown', handleKeydown);

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
                document.removeEventListener('keydown', handleKeydown);
            });
        } else {
            if (shouldRender()) animateOut();
        }
    });

    return (
        <Portal>
            <Show when={shouldRender()}>
                <div
                    class='fixed inset-0 z-50 flex items-center justify-center bg-black/60'
                    onMouseDown={closeModal}
                    ref={modalOverlayRef}
                    role='none'
                >
                    <div
                        class={cn(
                            'pointer-events-auto relative flex size-9/12 flex-col gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 p-4 text-black shadow-lg backdrop-blur-sm dark:text-white',
                            props.class,
                        )}
                        onMouseDown={(e) => e.stopPropagation()}
                        ref={modalContentRef}
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
        </Portal>
    );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
