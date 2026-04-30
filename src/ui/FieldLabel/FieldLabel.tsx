import { type JSX, Show, type VoidComponent } from 'solid-js';

import { Label } from '~/ui/Label';

export type FieldLabelProps = {
    id?: string;
    label: JSX.Element;
    required?: boolean;
};

export const FieldLabel: VoidComponent<FieldLabelProps> = (props) => {
    return (
        <Label for={props.id}>
            <span>{props.label}</span>
            <Show when={props.required}>
                <span class='text-text-danger' title='required'>
                    *
                </span>
            </Show>
        </Label>
    );
};
