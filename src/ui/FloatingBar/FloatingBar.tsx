import type { FlowComponent, Ref } from 'solid-js';

import { cn } from '~/utils';

type FloatingBarPosition = 'top' | 'right' | 'bottom' | 'left';
type FloatingBarAlignment = 'start' | 'center' | 'end';
type FloatingBarOrientation = 'horizontal' | 'vertical';
type FloatingBarStrategy = 'absolute' | 'fixed' | 'sticky';

export type FloatingBarProps = {
    position?: FloatingBarPosition;
    alignment?: FloatingBarAlignment;
    orientation?: FloatingBarOrientation;
    strategy?: FloatingBarStrategy;
    class?: string;
    ref?: Ref<HTMLDivElement>;
};

export const FloatingBar: FlowComponent<FloatingBarProps> = (props) => {
    return (
        <div
            class={cn(
                'flex size-fit items-center gap-2 rounded-default bg-surface-2 p-2 text-text-primary outline outline-border-strong',
                props.class,
            )}
            ref={props.ref}
        >
            {props.children}
        </div>
    );
};
