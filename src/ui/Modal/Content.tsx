import { createEffect, type JSX, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Transition } from 'solid-transition-group';

import { IconMenuCloseMd } from '~/icons';
import { Button } from '~/ui/Button';
import { useModalContext } from '~/ui/Modal/context';
import { cn } from '~/utils';

export const Content = (props: { class?: string; children: JSX.Element }) => {
    let dialogRef!: HTMLDialogElement;

    const ctx = useModalContext();

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

    createEffect(() => {
        if (ctx.isOpen()) {
            dialogRef.showModal();

            const abortController = new AbortController();

            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            dialogRef.addEventListener(
                'close',
                () => ctx.setIsOpen(false),
                abortController,
            );

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
                abortController.abort();
            });
        } else {
            dialogRef.close();
        }
    });

    return (
        <Portal>
            <Transition onEnter={onEnterAnim} onExit={onExitAnim}>
                <dialog
                    class={cn(
                        'm-auto size-9/12 rounded-default bg-surface-1/80 p-4 text-text-primary',
                        props.class,
                    )}
                    closedby='any'
                    ref={dialogRef}
                >
                    <Button
                        class='absolute top-1 right-1'
                        onClick={() => ctx.closeModal()}
                        variant='icon'
                    >
                        <IconMenuCloseMd />
                    </Button>
                    {props.children}
                </dialog>
            </Transition>
        </Portal>
    );
};
