import type { JSXElement, ParentComponent } from 'solid-js';

import { cn } from '~/utils';

export type FieldsetProps = {
    disabled?: boolean;
    class?: string;
    children?: JSXElement;
};

export const Fieldset: FieldsetCompound = (props) => {
    return (
        <fieldset
            class={cn(
                'flex flex-col gap-8 rounded-default border border-border p-4 disabled:opacity-50',
                props.class,
            )}
            disabled={props.disabled}
            inert={props.disabled}
        >
            {props.children}
        </fieldset>
    );
};

type FieldsetLegendPlacement = 'start' | 'center' | 'end';

const LEGEND_PLACEMENT: Record<FieldsetLegendPlacement, string> = {
    start: cn('mr-auto'),
    center: cn('m-auto'),
    end: cn('ml-auto'),
};

const FieldsetLegend: ParentComponent<{
    placement?: FieldsetLegendPlacement;
    class?: string;
}> = (props) => {
    return (
        <legend
            class={cn(
                'px-2',
                LEGEND_PLACEMENT[props.placement ?? 'start'],
                props.class,
            )}
        >
            {props.children}
        </legend>
    );
};

type FieldsetCompound = {
    (props: FieldsetProps): JSXElement;
    Legend: typeof FieldsetLegend;
};

Fieldset.Legend = FieldsetLegend;
