import {
    type ComponentProps,
    type ParentComponent,
    splitProps,
} from 'solid-js';

import { cn } from '~/utils';

export type LabelProps = ComponentProps<'label'>;

export const Label: ParentComponent<LabelProps> = (rawProps) => {
    const [local, others] = splitProps(rawProps, ['class', 'for', 'children']);

    return (
        <label
            class={cn(
                'flex items-center gap-1 font-semibold text-sm text-text-primary capitalize',
                local.class,
            )}
            for={local.for}
            {...others}
        >
            {local.children}
        </label>
    );
};
