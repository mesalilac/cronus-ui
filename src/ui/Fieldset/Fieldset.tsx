import type { JSXElement, ParentComponent } from 'solid-js';

import { Text } from '~/ui/Text';
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

const FieldsetDescription: ParentComponent<{ class?: string }> = (props) => {
    return (
        <Text class={props.class} variant='muted'>
            {props.children}
        </Text>
    );
};

type FieldsetCompound = {
    (props: FieldsetProps): JSXElement;
    Legend: typeof FieldsetLegend;
    Description: typeof FieldsetDescription;
};

Fieldset.Legend = FieldsetLegend;
Fieldset.Description = FieldsetDescription;
