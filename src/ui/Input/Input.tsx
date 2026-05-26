import {
    createEffect,
    createSignal,
    createUniqueId,
    type JSX,
    mergeProps,
    type Ref,
    Show,
} from 'solid-js';

import {
    IconEditHide,
    IconEditShow,
    IconInterfaceSearchMagnifyingGlass,
    IconMenuCloseMd,
} from '~/icons';
import { useFieldContext } from '~/ui/Field';
import { Label } from '~/ui/Label';
import { cn } from '~/utils';

export type InputProps = {
    type?: 'text' | 'search' | 'email' | 'password' | 'url';
    value: string;
    onInput?: (value: string) => void;
    onKeyDown?: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent>;
    onBlur?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
    onFocusIn?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
    onFocusOut?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    readOnly?: boolean;
    class?: string;
    ref?: Ref<HTMLInputElement>;
};

export const Input = (rawProps: InputProps) => {
    const props = mergeProps(
        { type: 'text' } satisfies Partial<InputProps>,
        rawProps,
    );

    const fieldCtx = useFieldContext();

    const id = createUniqueId();

    const [isFocused, setIsFocused] = createSignal(false);

    const [internalInputType, setInternalInputType] = createSignal(props.type);
    const [internalValue, setInternalValue] = createSignal(props.value);

    const handleInput = (value: string) => props.onInput?.(value);

    createEffect(() => {
        if (!isFocused()) setInternalValue(props.value);
    });

    return (
        <div
            class={cn(
                'flex flex-row items-center gap-2 rounded-default border border-border bg-surface-3/30 p-1 px-3 py-2.5 focus-within:border-transparent focus-within:ring-2 focus-within:ring-accent has-invalid:border-danger has-invalid:ring-danger',
                fieldCtx?.hasError() &&
                    'border-danger bg-danger/30 focus-within:ring-danger',
                fieldCtx?.hasWarning() &&
                    'border-warning bg-warning/30 focus-within:ring-warning',
                props.class,
            )}
        >
            <Show when={props.type === 'search'}>
                <Label for={id}>
                    <IconInterfaceSearchMagnifyingGlass class='size-5 text-text-muted' />
                </Label>
            </Show>
            <input
                aria-invalid={fieldCtx?.hasError()}
                autocomplete='off'
                autofocus={props.autoFocus}
                class={cn(
                    'w-full grow text-sm caret-accent placeholder:text-text-muted focus:outline-none disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
                    props.readOnly && 'text-text-muted',
                )}
                disabled={props.disabled}
                id={fieldCtx?.id() ?? id}
                maxLength={props.maxLength}
                minLength={props.minLength}
                onBlur={() => {
                    setIsFocused(false);
                    props.onBlur;
                }}
                onFocus={() => setIsFocused(true)}
                onFocusIn={props.onFocusIn}
                onFocusOut={props.onFocusOut}
                onInput={(e) => handleInput(e.currentTarget.value)}
                onKeyDown={props.onKeyDown}
                placeholder={
                    props.placeholder ??
                    (props.type === 'search' ? 'Search' : undefined)
                }
                readonly={props.readOnly}
                ref={props.ref}
                required={props.required}
                type={internalInputType()}
                value={internalValue()}
            />
            <Show when={props.type === 'password'}>
                <Show
                    fallback={
                        <IconEditShow
                            aria-label='Show password'
                            class='cursor-pointer text-text-muted hover:text-text-secondary'
                            onClick={() => setInternalInputType('password')}
                        />
                    }
                    when={internalInputType() === 'password'}
                >
                    <IconEditHide
                        aria-label='Hide password'
                        class='cursor-pointer text-text-muted hover:text-text-secondary'
                        onClick={() => setInternalInputType('text')}
                    />
                </Show>
            </Show>
            <IconMenuCloseMd
                class='cursor-pointer text-text-muted hover:text-text-secondary'
                onClick={() => {
                    const value = '';

                    setInternalValue(value);
                    props.onInput?.(value);
                }}
                style={{
                    visibility:
                        props.value.length > 0 && !props.readOnly
                            ? 'visible'
                            : 'hidden',
                }}
            />
        </div>
    );
};
