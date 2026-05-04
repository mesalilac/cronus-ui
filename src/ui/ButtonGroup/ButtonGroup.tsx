import type { FlowComponent } from 'solid-js';

import { cn } from '~/utils';

export type ButtonGroupProps = {
    class?: string;
};

export const ButtonGroup: FlowComponent<ButtonGroupProps> = (props) => {
    return <div class={cn('', props.class)}>{props.children}</div>;
};
