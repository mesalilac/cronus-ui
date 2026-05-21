import {
    type Accessor,
    type ComponentProps,
    createContext,
    type JSXElement,
    mergeProps,
    Show,
    splitProps,
    useContext,
    type VoidComponent,
} from 'solid-js';

import { CopyButton } from '~/ui/CopyButton';
import { Input } from '~/ui/Input';
import { Textarea } from '~/ui/Textarea';
import { cn } from '~/utils';

export type CopyFieldProps = {
    value?: string;
    multiline?: boolean;
    readOnly?: boolean;
    class?: string;
    children: JSXElement;
};

export const CopyFieldContext = createContext<{
    value: Accessor<string | undefined>;
    multiline: Accessor<boolean>;
    readOnly: Accessor<boolean>;
}>();

export const useCopyFieldContext = () => {
    const context = useContext(CopyFieldContext);

    if (!context) {
        throw new Error(
            'useCopyFieldContext must be used within the CopyFieldContext provider',
        );
    }

    return context;
};

type CopyFieldCompound = {
    (props: CopyFieldProps): JSXElement;
    Input: typeof CopyFieldInput;
    CopyButton: typeof CopyFieldCopyButton;
};

export const CopyField: CopyFieldCompound = (rawProps) => {
    const props = mergeProps(
        {
            multiline: false,
            readOnly: true,
        } satisfies Partial<CopyFieldProps>,
        rawProps,
    );

    return (
        <div
            class={cn('flex gap-1', props.multiline && 'flex-col', props.class)}
        >
            <CopyFieldContext.Provider
                value={{
                    value: () => props.value,
                    multiline: () => props.multiline,
                    readOnly: () => props.readOnly,
                }}
            >
                {props.children}
            </CopyFieldContext.Provider>
        </div>
    );
};

const CopyFieldInput: VoidComponent<{
    class?: string;
}> = (props) => {
    const ctx = useCopyFieldContext();

    return (
        <Show
            fallback={
                <Input
                    class={props.class}
                    readOnly={ctx.readOnly()}
                    value={ctx.value() ?? ''}
                />
            }
            when={ctx.multiline()}
        >
            <Textarea
                class={props.class}
                readOnly={ctx.readOnly()}
                value={ctx.value() ?? ''}
            />
        </Show>
    );
};

const CopyFieldCopyButton: VoidComponent<ComponentProps<typeof CopyButton>> = (
    props,
) => {
    const [local, others] = splitProps(props, ['value', 'compact']);

    const ctx = useCopyFieldContext();

    return (
        <CopyButton
            compact={local.compact ?? !ctx.multiline()}
            value={local.value ?? ctx.value()}
            {...others}
        />
    );
};

CopyField.Input = CopyFieldInput;
CopyField.CopyButton = CopyFieldCopyButton;
