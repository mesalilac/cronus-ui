import {
    type Accessor,
    createContext,
    createSignal,
    createUniqueId,
    type JSXElement,
    onCleanup,
    onMount,
    type ParentComponent,
    type Setter,
    Show,
    useContext,
} from 'solid-js';

import { IconWarningTriangleWarning } from '~/icons';
import { Label } from '~/ui/Label';
import { Text, type TextVariant } from '~/ui/Text';
import { cn } from '~/utils';

export const FieldContext = createContext<{
    id: Accessor<string>;
    required: Accessor<boolean | undefined>;

    warningCount: Accessor<number>;
    setWarningCount: Setter<number>;

    errorCount: Accessor<number>;
    setErrorCount: Setter<number>;

    hasWarning: () => boolean;
    hasError: () => boolean;
}>();

export const useFieldContext = () => {
    const context = useContext(FieldContext);

    return context;
};

export type FieldProps = {
    id?: string;
    required?: boolean;
    class?: string;
    children: JSXElement;
};

export const Field: FieldCompound = (props) => {
    const fallbackId = createUniqueId();

    const [warningCount, setWarningCount] = createSignal<number>(0);
    const [errorCount, setErrorCount] = createSignal<number>(0);

    return (
        <div class={cn('flex size-full flex-col gap-1', props.class)}>
            <FieldContext.Provider
                value={{
                    id: () => props.id ?? fallbackId,
                    required: () => props.required,
                    warningCount,
                    setWarningCount,
                    errorCount,
                    setErrorCount,
                    hasWarning: () => warningCount() > 0,
                    hasError: () => errorCount() > 0,
                }}
            >
                {props.children}
            </FieldContext.Provider>
        </div>
    );
};

const FieldLabel: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useFieldContext();

    const getLabelVariant = (): TextVariant | undefined => {
        if (ctx?.hasError()) return 'danger';
        if (ctx?.hasWarning()) return 'warning';
    };

    return (
        <Label class={props.class} for={ctx?.id()}>
            <Text variant={getLabelVariant()}>{props.children}</Text>
            <Show when={ctx?.required()}>
                <span class='text-text-danger' title='Required!'>
                    *
                </span>
            </Show>
        </Label>
    );
};

const FieldDescription: ParentComponent<{ class?: string }> = (props) => {
    return (
        <Text as='p' class={cn('text-xs', props.class)} variant='muted'>
            {props.children}
        </Text>
    );
};

const FieldWarning: ParentComponent<{
    class?: string;
}> = (props) => {
    const ctx = useFieldContext();

    onMount(() => {
        ctx?.setWarningCount((prev) => prev + 1);
    });

    onCleanup(() => {
        ctx?.setWarningCount((prev) => prev - 1);
    });

    return (
        <Text
            as='p'
            class={cn('flex gap-1 text-xs', props.class)}
            variant='warning'
        >
            <IconWarningTriangleWarning />
            {props.children}
        </Text>
    );
};

const FieldError: ParentComponent<{
    class?: string;
}> = (props) => {
    const ctx = useFieldContext();

    onMount(() => {
        ctx?.setErrorCount((prev) => prev + 1);
    });

    onCleanup(() => {
        ctx?.setErrorCount((prev) => prev - 1);
    });

    return (
        <Text
            as='p'
            class={cn('flex gap-1 text-xs', props.class)}
            variant='danger'
        >
            <IconWarningTriangleWarning />
            {props.children}
        </Text>
    );
};

type FieldCompound = {
    (props: FieldProps): JSXElement;
    Label: typeof FieldLabel;
    Description: typeof FieldDescription;
    Warning: typeof FieldWarning;
    Error: typeof FieldError;
};

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Warning = FieldWarning;
Field.Error = FieldError;
