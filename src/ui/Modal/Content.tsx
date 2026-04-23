import { gsap } from 'gsap';
import { createEffect, type JSX, onCleanup, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';

import { IconMenuCloseMd } from '~/icons';
import { Button, type ButtonProps } from '~/ui/Button';
import { useModalContext } from '~/ui/Modal/context';
import { cn } from '~/utils';

export type ModalContentProps = {
    class?: string;
    children: JSX.Element;
};

export const Content = (props: ModalContentProps) => {
    let dialogRef!: HTMLDialogElement;

    const ctx = useModalContext();

    const onEnterAnim = () => {
        const gsapCtx = gsap.context(() => {
            gsap.timeline().fromTo(
                dialogRef,
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
                    onComplete: () => gsapCtx.kill(),
                },
                '<',
            );
        });
    };

    const onExitAnim = () => {
        const gsapCtx = gsap.context(() => {
            gsap.to(dialogRef, {
                autoAlpha: 0,
                scale: 0.96,
                y: 12,
                duration: 0.18,
                ease: 'power1.in',
                onComplete: () => {
                    gsapCtx.kill();
                    dialogRef.close();
                },
            });
        });
    };

    onMount(() => {
        const abortController = new AbortController();

        dialogRef.addEventListener(
            'cancel',
            (e) => {
                e.preventDefault();
                ctx.setIsOpen(false);
            },
            abortController,
        );

        onCleanup(() => {
            abortController.abort();
        });
    });

    createEffect(() => {
        if (ctx.isOpen()) {
            dialogRef.showModal();

            onEnterAnim();

            const originalOverflow = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = 'hidden';

            onCleanup(() => {
                document.body.style.overflow = originalOverflow;
            });
        } else {
            onExitAnim();
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
                <div class='flex h-full w-full flex-col gap-2'>
                    {props.children}
                </div>
            </dialog>
        </Portal>
    );
};

export type ModalCloseButtonProps = {
    class?: string;
    children?: JSX.Element;
} & Pick<ButtonProps, 'variant'>;

export const CloseButton = (props: ModalCloseButtonProps) => {
    const ctx = useModalContext();

    return (
        <Button
            class={cn('absolute top-1 right-1', props.class)}
            onClick={() => ctx.closeModal()}
            variant={props.variant ?? 'icon'}
        >
            {props.children ?? <IconMenuCloseMd />}
        </Button>
    );
};

export type ModalBodyProps = {
    class?: string;
    children: JSX.Element;
};

export const Body = (props: ModalBodyProps) => {
    return (
        <div class={cn('flex flex-col gap-2 overflow-y-auto', props.class)}>
            {props.children}
        </div>
    );
};
