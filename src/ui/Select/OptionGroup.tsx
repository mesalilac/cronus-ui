import { gsap } from 'gsap';
import { createSignal, type JSX, Show } from 'solid-js';
import { Transition } from 'solid-transition-group';

import { IconArrowCaretDownMd, IconArrowCaretUpMd } from '~/icons';
import { Button } from '~/ui/Button';

export type SelectOptionGroupProps = {
    label: string;
    open?: boolean;
    children: JSX.Element;
};

export const OptionGroup = (props: SelectOptionGroupProps) => {
    const [isOpen, setIsOpen] = createSignal(props.open ?? true);

    const onEnterAnim = (el: Element, done: () => void) => {
        gsap.from(el, {
            autoAlpha: 0,
            height: 0,
            duration: 0.2,
            ease: 'power3.out',
            onComplete: done,
        });
    };

    const onExitAnim = (el: Element, done: () => void) => {
        gsap.to(el, {
            autoAlpha: 0,
            height: 0,
            duration: 0.2,
            ease: 'power3.out',
            onComplete: done,
        });
    };

    return (
        <>
            <Button onClick={() => setIsOpen((p) => !p)} variant='ghost'>
                <Show
                    fallback={<IconArrowCaretDownMd size='1.5em' />}
                    when={isOpen()}
                >
                    <IconArrowCaretUpMd size='1.5em' />
                </Show>
                <span class='font-bold text-neutral-400 text-sm uppercase'>
                    {props.label}
                </span>
            </Button>
            <Transition onEnter={onEnterAnim} onExit={onExitAnim}>
                <Show when={isOpen()}>
                    <div class='ml-4 flex flex-col gap-1 rounded-lg bg-neutral-700/20'>
                        {props.children}
                    </div>
                </Show>
            </Transition>
        </>
    );
};
