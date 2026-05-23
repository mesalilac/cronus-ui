import {
    type Accessor,
    createContext,
    createUniqueId,
    type JSXElement,
    type ParentComponent,
    Show,
    useContext,
} from 'solid-js';

import { Label } from '~/ui/Label';
import { cn } from '~/utils';

export const FieldContext = createContext<{
    id: Accessor<string>;
}>();

export const useFieldContext = () => {
    const context = useContext(FieldContext);

    return context;
};

export type FieldProps = {
    id?: string;
    class?: string;
    children: JSXElement;
};

export const Field: FieldCompound = (props) => {
    const fallbackId = createUniqueId();

    return (
        <div class={cn('flex flex-col gap-1', props.class)}>
            <FieldContext.Provider
                value={{
                    id: () => props.id ?? fallbackId,
                }}
            >
                {props.children}
            </FieldContext.Provider>
        </div>
    );
};

const FieldLabel: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useFieldContext();

    return (
        <Label class={props.class} for={ctx?.id()}>
            {props.children}
        </Label>
    );
};

const FieldDescription: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

const FieldError: ParentComponent<{
    show: boolean | null | undefined;
    class?: string;
}> = (props) => {
    return (
        <Show when={props.show}>
            <span class={cn('text-text-danger/80 text-xs', props.class)}>
                {props.children}
            </span>
        </Show>
    );
};

type FieldCompound = {
    (props: FieldProps): JSXElement;
    Label: typeof FieldLabel;
    Description: typeof FieldDescription;
    Error: typeof FieldError;
};

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Error = FieldError;
