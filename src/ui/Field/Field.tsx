import {
    type Accessor,
    createContext,
    createUniqueId,
    type JSXElement,
    type ParentComponent,
    useContext,
} from 'solid-js';

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

const Label: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

const Description: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

const FieldError: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

type FieldCompound = {
    (props: FieldProps): JSXElement;
    Label: typeof Label;
    Description: typeof Description;
    Error: typeof FieldError;
};

Field.Label = Label;
Field.Description = Description;
Field.Error = FieldError;
