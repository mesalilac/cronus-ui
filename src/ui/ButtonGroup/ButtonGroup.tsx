import type { FlowComponent } from 'solid-js';

import { cn } from '~/utils';

export type ButtonGroupProps = {
    class?: string;
};

export const ButtonGroup: FlowComponent<ButtonGroupProps> = (props) => {
    return (
        <div
            class={cn(
                'flex *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg',
                props.class,
            )}
        >
            {props.children}
        </div>
    );
};
