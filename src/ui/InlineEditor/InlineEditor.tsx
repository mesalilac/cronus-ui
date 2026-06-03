import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSXElement,
    on,
    type ParentComponent,
    Show,
    useContext,
    type VoidComponent,
} from 'solid-js';

import {
    IconArrowReload01,
    IconInterfaceCheck,
    IconMenuCloseMd,
} from '~/icons';
import { Button } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { cn } from '~/utils';

type InlineEditorProps = {
    value?: string;
    defaultValue?: string;
    /**
     * Value to submit onSave when input is empty
     */
    fallbackValue?: string;

    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;

    onSave?: (value: string) => void;
    onCancel?: () => void;

    class?: string;
    children: JSXElement;
};

export const InlineEditorContext = createContext<{
    draftValue: Accessor<string>;
    setDraftValue: (value: string) => void;

    value: Accessor<string>;
    fallbackValue: Accessor<string | undefined>;

    open: Accessor<boolean>;
    setOpen: (open: boolean) => void;

    isSaveDisabled: () => boolean;

    onSave: () => void;
    onCancel: () => void;
}>();

export const useInlineEditorContext = () => {
    const context = useContext(InlineEditorContext);

    if (!context) {
        throw new Error(
            'useInlineEditorContext must be used within the InlineEditorContext provider',
        );
    }

    return context;
};

export const InlineEditor: InlineEditorCompound = (props) => {
    const getValue = () => props.value ?? props.defaultValue ?? '';

    const [draftValue, setDraftValue] = createSignal<string>('');

    const [open, setInternalOpen] = createSignal<boolean>(
        props.open ?? props.defaultOpen ?? false,
    );

    const setOpen = (val: boolean) => {
        if (props.open === undefined) setInternalOpen(val);
        props.onOpenChange?.(val);
    };

    createComputed(
        on(
            () => Boolean(props.open),
            (val) => setInternalOpen(val),
            { defer: true },
        ),
    );

    createComputed(
        on(
            () => open(),
            (isOpen) => {
                if (isOpen) setDraftValue(getValue());
            },
            { defer: true },
        ),
    );

    createComputed(
        on(
            () => props.value,
            (val) =>
                val === undefined ? setDraftValue('') : setDraftValue(val),
            { defer: true },
        ),
    );

    const isSaveDisabled = () => !draftValue().trim() && !props.fallbackValue;

    const onSave = () => {
        if (isSaveDisabled()) return;

        if (props.fallbackValue && !draftValue().trim())
            props.onSave?.(props.fallbackValue);
        else props.onSave?.(draftValue().trim());

        setOpen(false);
    };

    const onCancel = () => {
        props.onCancel?.();

        setOpen(false);
    };

    return (
        <InlineEditorContext.Provider
            value={{
                draftValue,
                setDraftValue,
                value: getValue,
                fallbackValue: () => props.fallbackValue,
                open,
                setOpen,
                isSaveDisabled,
                onSave,
                onCancel,
            }}
        >
            <div class={cn('flex items-center gap-2', props.class)}>
                {props.children}
            </div>
        </InlineEditorContext.Provider>
    );
};

const InlineEditorDisplay = (props: {
    children: (setOpen: (val: boolean) => void) => JSXElement;
}) => {
    const ctx = useInlineEditorContext();

    return <Show when={!ctx.open()}>{props.children(ctx.setOpen)}</Show>;
};

const InlineEditorInput: VoidComponent<{
    placeholder?: string;
    class?: string;
}> = (props) => {
    const ctx = useInlineEditorContext();

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') ctx.onSave();
        if (e.key === 'Escape') ctx.onCancel();
    };

    return (
        <Show when={ctx.open()}>
            <Input
                autoFocus
                class={cn('grow', props.class)}
                data-slot='input'
                onInput={ctx.setDraftValue}
                onKeyDown={handleKeydown}
                placeholder={
                    props.placeholder ?? ctx.fallbackValue() ?? ctx.value()
                }
                value={ctx.draftValue()}
            />
        </Show>
    );
};

const InlineEditorSave: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useInlineEditorContext();

    return (
        <Show when={ctx.open()}>
            <Button
                appearance='success'
                class={props.class}
                data-slot='save'
                disabled={ctx.isSaveDisabled()}
                onClick={() => ctx.onSave()}
                size='icon'
                variant='ghost'
            >
                {props.children ?? <IconInterfaceCheck />}
            </Button>
        </Show>
    );
};

const InlineEditorCancel: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useInlineEditorContext();

    return (
        <Show when={ctx.open()}>
            <Button
                appearance='secondary'
                class={props.class}
                data-slot='cancel'
                onClick={() => ctx.onCancel()}
                size='icon'
                variant='ghost'
            >
                {props.children ?? <IconMenuCloseMd />}
            </Button>
        </Show>
    );
};

const InlineEditorReset: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useInlineEditorContext();

    return (
        <Show when={ctx.open()}>
            <Button
                appearance='secondary'
                class={props.class}
                data-slot='reset'
                disabled={!ctx.value()}
                onClick={() => ctx.setDraftValue(ctx.value())}
                size='icon'
                variant='ghost'
            >
                {props.children ?? <IconArrowReload01 />}
            </Button>
        </Show>
    );
};

type InlineEditorCompound = {
    (props: InlineEditorProps): JSXElement;
    Display: typeof InlineEditorDisplay;
    Input: typeof InlineEditorInput;
    Save: typeof InlineEditorSave;
    Cancel: typeof InlineEditorCancel;
    Reset: typeof InlineEditorReset;
};

InlineEditor.Display = InlineEditorDisplay;
InlineEditor.Input = InlineEditorInput;
InlineEditor.Save = InlineEditorSave;
InlineEditor.Cancel = InlineEditorCancel;
InlineEditor.Reset = InlineEditorReset;
