import type { JSX } from 'solid-js';

import { useMenuContext } from '~/ui/Menu/context';

export type ContextMenuTriggerProps = {
    class?: string;
    children?: JSX.Element;
};

export const ContextMenuTrigger = (props: ContextMenuTriggerProps) => {
    const ctx = useMenuContext();

    return (
        <div
            class={props.class}
            onClick={() => {
                if (ctx.isOpen()) ctx.setIsOpen(false);
            }}
            ref={ctx.setTriggerRef}
            role='none'
        >
            {props.children}
        </div>
    );
};
