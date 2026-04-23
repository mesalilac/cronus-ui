import { createEffect, type JSX, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';

import { IconMenuCloseMd } from '~/icons';
import { Button } from '~/ui/Button';
import { useModalContext } from '~/ui/Modal/context';
import { cn } from '~/utils';

export const Content = (props: { class?: string; children: JSX.Element }) => {
    let dialogRef!: HTMLDialogElement;

    const ctx = useModalContext();

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
            <dialog
                class={cn(
                    'm-auto size-9/12 rounded-default border border-border bg-surface-1/80 p-4 text-text-primary shadow-default backdrop:bg-black/5 backdrop:backdrop-blur-sm',
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
                <div class='flex h-full w-full flex-col gap-2'>
                    {props.children}
                </div>
            </dialog>
        </Portal>
    );
};

export type ModalContentBodyProps = {
    class?: string;
    children: JSX.Element;
};

export const Body = (props: ModalContentBodyProps) => {
    return (
        <div class={cn('flex flex-col gap-2 overflow-y-auto', props.class)}>
            {props.children}
        </div>
    );
};
