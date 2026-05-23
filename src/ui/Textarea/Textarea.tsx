import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    Match,
    Show,
    Switch,
} from 'solid-js';

import { useFieldContext } from '~/ui/Field';
import { FieldLabel } from '~/ui/FieldLabel';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type TextareaProps = {
    label?: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    helper?: string;
    autoFocus?: boolean;
    minLength?: number;
    maxLength?: number;
    readOnly?: boolean;
    disabled?: boolean;
    rows?: string | number;
    cols?: string | number;
    spellcheck?: boolean | 'false' | 'true';
    wrap?: 'hard' | 'soft' | 'off';
    onInput?: (value: string) => void;
    validate?: (value: string, isDirty: boolean) => string | undefined;
    class?: string;
};

export const Textarea = (props: TextareaProps) => {
    const fieldCtx = useFieldContext();

    const id = createUniqueId();

    const [isFocused, setIsFocused] = createSignal(false);
    const [isDirty, setIsDirty] = createSignal(false);

    const [internalValue, setInternalValue] = createSignal(props.value);

    const error = createMemo(() => {
        const validationError = props.validate?.(internalValue(), isDirty());

        if (props.required && internalValue().length === 0)
            return 'This field is required';

        if (
            props.minLength !== undefined &&
            internalValue().length < props.minLength
        )
            return `This field must be at least ${props.minLength} characters long`;

        if (
            props.maxLength !== undefined &&
            internalValue().length > props.maxLength
        )
            return `This field must be at most ${props.maxLength} characters long`;

        return validationError;
    });

    const handleInput = (value: string) => {
        setIsDirty(true);

        props.onInput?.(value);
    };

    createEffect(() => {
        if (!isFocused()) setInternalValue(props.value);
    });

    return (
        <div class='flex w-full flex-col gap-2'>
            <Show when={props.label}>
                {(label) => (
                    <FieldLabel
                        id={id}
                        label={label()}
                        required={props.required}
                    />
                )}
            </Show>
            <textarea
                aria-invalid={Boolean(error())}
                autofocus={props.autoFocus}
                class={cn(
                    'h-32 max-h-32 resize-none rounded-default border border-border bg-surface-3/30 px-3 py-2.5 text-sm caret-accent placeholder:text-text-muted focus-within:border-transparent focus:outline-none focus:ring-2 focus:ring-accent',
                    props.readOnly && 'text-text-muted',
                    error() && 'bg-danger/30 focus:ring-danger',
                    props.class,
                )}
                cols={props.cols}
                disabled={props.disabled}
                id={fieldCtx?.id() ?? id}
                maxLength={props.maxLength}
                minLength={props.minLength}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                onInput={(e) => handleInput(e.currentTarget.value)}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                required={props.required}
                rows={props.rows}
                spellcheck={props.spellcheck}
                value={internalValue()}
                wrap={props.wrap}
            />
            <Switch>
                <Match when={error()}>
                    <HelperText variant='danger'>{error()}</HelperText>
                </Match>
                <Match when={props.helper}>
                    <HelperText>{props.helper}</HelperText>
                </Match>
            </Switch>
        </div>
    );
};
