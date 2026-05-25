import { createEffect, createSignal, createUniqueId } from 'solid-js';

import { useFieldContext } from '~/ui/Field';
import { cn } from '~/utils';

export type TextareaProps = {
    value: string;
    placeholder?: string;
    required?: boolean;
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
    class?: string;
};

export const Textarea = (props: TextareaProps) => {
    const fieldCtx = useFieldContext();

    const id = createUniqueId();

    const [isFocused, setIsFocused] = createSignal(false);

    const [internalValue, setInternalValue] = createSignal(props.value);

    const handleInput = (value: string) => {
        props.onInput?.(value);
    };

    createEffect(() => {
        if (!isFocused()) setInternalValue(props.value);
    });

    return (
        <div class='flex w-full flex-col gap-2'>
            <textarea
                aria-invalid={Boolean(fieldCtx?.hasError())}
                autofocus={props.autoFocus}
                class={cn(
                    'h-32 max-h-32 resize-none rounded-default border border-border bg-surface-3/30 px-3 py-2.5 text-sm caret-accent placeholder:text-text-muted invalid:border-danger focus-within:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:invalid:ring-danger disabled:opacity-50',
                    props.readOnly && 'text-text-muted',
                    fieldCtx?.hasError() &&
                        'border-danger bg-danger/30 focus:ring-danger',
                    fieldCtx?.hasWarning() &&
                        'border-warning bg-warning/30 focus:ring-warning',
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
        </div>
    );
};
