import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    type JSX,
    mergeProps,
    onMount,
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
    let inputRef!: HTMLInputElement;

    const props = mergeProps(
        { type: 'text' } satisfies Partial<InputProps>,
        rawProps,
    );

    const fieldCtx = useFieldContext();

    const fallbackId = createUniqueId();

    const getId = createMemo(() => fieldCtx?.id() ?? fallbackId);

    const [isFocused, setIsFocused] = createSignal(false);

    const [internalInputType, setInternalInputType] = createSignal(props.type);
    const [internalValue, setInternalValue] = createSignal(props.value);

    const handleInput = (value: string) => props.onInput?.(value);

    createEffect(() => {
        if (!isFocused()) setInternalValue(props.value);
    });

    // NOTE: `autofocus` prop doesn't work if `Input` is inside a container with a mount transition
    onMount(() => {
        if (!inputRef) return;

        if (props.autoFocus) {
            requestAnimationFrame(() => {
                inputRef.focus();
            });
        }
    });

    return (
        <div
            class={cn(
                'flex cursor-text flex-row items-center gap-2 rounded-default border border-border bg-surface-3/30 px-3 py-2 inert:opacity-50 focus-within:border-transparent focus-within:ring-2 focus-within:ring-accent has-invalid:border-danger has-invalid:ring-danger',
                fieldCtx?.hasError() &&
                    'border-danger bg-danger/30 focus-within:ring-danger',
                fieldCtx?.hasWarning() &&
                    'border-warning bg-warning/30 focus-within:ring-warning',
                props.class,
            )}
            inert={props.disabled}
            onMouseDown={(e) => {
                if (e.target !== e.currentTarget) return;

                e.preventDefault();

                inputRef?.focus();
            }}
            role='none'
        >
            <Show when={props.type === 'search'}>
                <Label for={getId()}>
                    <IconInterfaceSearchMagnifyingGlass class='size-5 text-text-muted' />
                </Label>
            </Show>
            <input
                aria-invalid={fieldCtx?.hasError()}
                autocomplete='off'
                class={cn(
                    'w-full grow text-sm caret-accent placeholder:text-text-muted focus:outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
                    props.readOnly && 'text-text-muted',
                )}
                disabled={props.disabled}
                id={getId()}
                maxLength={props.maxLength}
                minLength={props.minLength}
                onBlur={(e) => {
                    setIsFocused(false);
                    (
                        props.onBlur as JSX.FocusEventHandler<
                            HTMLInputElement,
                            FocusEvent
                        >
                    )?.(e);
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
                ref={(el) => {
                    inputRef = el;

                    if (typeof props.ref === 'function') props.ref(el);
                }}
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
