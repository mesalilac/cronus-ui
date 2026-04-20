import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    Match,
    Show,
    Switch,
} from 'solid-js';

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
    disabled?: boolean;
    onInput?: (value: string) => void;
    validate?: (value: string, isDirty: boolean) => string | undefined;
    class?: string;
};

export const Textarea = (props: TextareaProps) => {
    const id = createUniqueId();

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

        setInternalValue(value);
        props.onInput?.(value);
    };

    createEffect(() => {
        setInternalValue(props.value);
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
                    'h-32 max-h-32 resize-none rounded-default border border-border bg-surface-3/30 px-3 py-2.5 text-sm caret-accent placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent',
                    error() && 'bg-danger/30 focus:ring-danger',
                    props.class,
                )}
                disabled={props.disabled}
                id={id}
                maxLength={props.maxLength}
                minLength={props.minLength}
                onInput={(e) => handleInput(e.currentTarget.value)}
                placeholder={props.placeholder}
                required={props.required}
                value={internalValue()}
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
