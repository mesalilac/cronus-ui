import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    Match,
    Show,
    Switch,
} from 'solid-js';

import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type TextareaProps = {
    label?: string;
    value: string;
    required?: boolean;
    helper?: string;
    error?: string;
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
                <label
                    class='flex gap-1 font-bold text-neutral-200 text-sm capitalize'
                    for={id}
                >
                    <span>{props.label}</span>
                    {props.required && (
                        <span class='text-red-500' title='required'>
                            *
                        </span>
                    )}
                </label>
            </Show>
            <textarea
                aria-describedby={error() ? `error, ${error()}` : props.label}
                aria-invalid={Boolean(error())}
                class={cn(
                    'h-32 max-h-32 resize-none rounded-lg border border-neutral-600 bg-neutral-700/30 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500',
                    error() && 'bg-red-500/30 focus:ring-red-500',
                    props.class,
                )}
                id={id}
                onInput={(e) => handleInput(e.currentTarget.value)}
                required={props.required}
                value={internalValue()}
            />
            <Switch>
                <Match when={error()}>
                    <HelperText variant='error'>{error()}</HelperText>
                </Match>
                <Match when={props.helper}>
                    <HelperText>{props.helper}</HelperText>
                </Match>
            </Switch>
        </div>
    );
};
