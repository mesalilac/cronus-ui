import type { FlowComponent } from 'solid-js';

import { Button } from '~/ui/Button';
import { cn } from '~/utils';

import { useToggleGroupContext } from './context';

export type ToggleGroupItemProps = {
    value: string;
    class?: string;
    disabled?: boolean;
};

export const Item: FlowComponent<ToggleGroupItemProps> = (props) => {
    const ctx = useToggleGroupContext();

    const isSelected = () => ctx.isSelected(props.value);
    const isDisabled = () => ctx.disabled() ?? props.disabled;

    return (
        <Button
            appearance='secondary'
            class={cn(
                'rounded-none',

                // horizontal
                'data-[orientation=horizontal]:first:rounded-l-lg',
                'data-[orientation=horizontal]:last:rounded-r-lg',

                // vertical
                'data-[orientation=vertical]:first:rounded-t-lg',
                'data-[orientation=vertical]:last:rounded-b-lg',
                props.class,
            )}
            data-orientation={ctx.orientation()}
            disabled={isDisabled()}
            onClick={() => ctx.toggle(props.value)}
            variant={isSelected() ? 'soft' : 'ghost'}
        >
            {props.children}
        </Button>
    );
};
