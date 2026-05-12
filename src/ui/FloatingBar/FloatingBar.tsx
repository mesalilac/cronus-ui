import type { FlowComponent, Ref } from 'solid-js';

type FloatingBarPosition = 'top' | 'right' | 'bottom' | 'left';
type FloatingBarAlignment = 'start' | 'center' | 'end';
type FloatingBarOrientation = 'horizontal' | 'vertical';

export type FloatingBarProps = {
    position?: FloatingBarPosition;
    alignment?: FloatingBarAlignment;
    orientation?: FloatingBarOrientation;
    strategy?: 'absolute' | 'fixed' | 'sticky';
    class?: string;
    ref?: Ref<HTMLDivElement>;
};

export const FloatingBar: FlowComponent<FloatingBarProps> = (props) => {
    return <div>FloatingBar</div>;
};
