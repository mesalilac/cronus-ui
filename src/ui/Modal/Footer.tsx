import type { JSX } from 'solid-js';

import { IconMenuCloseMd, IconSystemSave } from '~/icons';
import { Button } from '~/ui/Button';
import { useModalContext } from '~/ui/Modal/context';
import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export const Footer = (props: { class?: string; children: JSX.Element }) => {
    return (
        <>
            <Separator class='-mx-4 mt-auto' />
            <div class={cn('flex flex-row gap-2 self-end', props.class)}>
                {props.children}
            </div>
        </>
    );
};

export const Cancel = (props: { class?: string; children?: JSX.Element }) => {
    const ctx = useModalContext();

    return (
        <Button
            class={props.class}
            onClick={ctx.closeModal}
            variant='secondary'
        >
            {props.children ?? (
                <>
                    <IconMenuCloseMd /> Cancel
                </>
            )}
        </Button>
    );
};

export const Save = (props: {
    class?: string;
    children?: JSX.Element;
    onClick?: () => void;
}) => {
    return (
        <Button class={props.class} onClick={props.onClick} variant='primary'>
            {props.children ?? (
                <>
                    <IconSystemSave /> Save
                </>
            )}
        </Button>
    );
};

Footer.Save = Save;
Footer.Cancel = Cancel;
