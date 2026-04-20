import { type JSX, Show, type VoidComponent } from 'solid-js';

export type FieldLabelProps = {
    id?: string;
    label: JSX.Element;
    required?: boolean;
};

export const FieldLabel: VoidComponent<FieldLabelProps> = (props) => {
    return (
        <label
            class='flex gap-1 font-bold text-sm text-text-primary capitalize'
            for={props.id}
        >
            <span>{props.label}</span>
            <Show when={props.required}>
                <span class='text-text-danger' title='required'>
                    *
                </span>
            </Show>
        </label>
    );
};
