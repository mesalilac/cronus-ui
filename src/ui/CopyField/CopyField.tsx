import {
    type Accessor,
    createContext,
    createSignal,
    type JSXElement,
    Match,
    mergeProps,
    Show,
    Switch,
    useContext,
    type VoidComponent,
} from 'solid-js';

import { IconEditCopy, IconInterfaceCheck, IconMenuCloseMd } from '~/icons';
import { Button, type ButtonAppearance } from '~/ui/Button';
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
    CopyButton: typeof CopyButton;
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

type CopyButtonState = 'normal' | 'copied' | 'failed';

const copyButtonAppearance: Record<CopyButtonState, ButtonAppearance> = {
    normal: 'secondary',
    copied: 'success',
    failed: 'danger',
};

const CopyButton: VoidComponent<{ class?: string }> = (props) => {
    const ctx = useCopyFieldContext();

    const [copyState, setCopyState] = createSignal<CopyButtonState>('normal');

    const handleCopy = () => {
        navigator.clipboard
            .writeText(ctx.value() ?? '')
            .catch(() => setCopyState('failed'));
        setCopyState('copied');

        setTimeout(() => {
            setCopyState('normal');
        }, 1000);
    };

    return (
        <Button
            appearance={copyButtonAppearance[copyState()]}
            class={props.class}
            onClick={handleCopy}
            variant={copyState() === 'normal' ? 'solid' : 'soft'}
        >
            <Switch
                fallback={
                    <>
                        <IconEditCopy />
                        <Show when={ctx.multiline()}>Copy into clipboard</Show>
                    </>
                }
            >
                <Match when={copyState() === 'copied'}>
                    <IconInterfaceCheck />
                    <Show when={ctx.multiline()}>Copied!</Show>
                </Match>
                <Match when={copyState() === 'failed'}>
                    <IconMenuCloseMd />
                    <Show when={ctx.multiline()}>Failed to copy!</Show>
                </Match>
            </Switch>
        </Button>
    );
};

CopyField.Input = CopyFieldInput;
CopyField.CopyButton = CopyButton;
