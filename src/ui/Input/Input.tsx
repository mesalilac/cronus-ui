import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    type JSX,
    Match,
    mergeProps,
    Show,
    Switch,
} from 'solid-js';

import {
    IconEditHide,
    IconEditShow,
    IconInterfaceSearchMagnifyingGlass,
    IconMenuCloseMd,
} from '~/icons';
import { FieldLabel } from '~/ui/FieldLabel';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type InputProps = {
    type?: 'text' | 'search' | 'email' | 'password' | 'url';
    value: string;
    onInput?: (value: string) => void;
    validate?: (value: string, isDirty: boolean) => string | undefined;
    placeholder?: string;
    label?: JSX.Element;
    required?: boolean;
    autoFocus?: boolean;
    helper?: JSX.Element;
    minLength?: number;
    maxLength?: number;
    badge?: JSX.Element;
    icon?: JSX.Element;
    class?: string;
    children?: JSX.Element;
};

export const Input = (rawProps: InputProps) => {
    const props = mergeProps(
        { type: 'text' } satisfies Partial<InputProps>,
        rawProps,
    );

    const id = createUniqueId();

    const [isDirty, setIsDirty] = createSignal(false);

    const [internalInputType, setInternalInputType] = createSignal(props.type);
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

    const getIcon = () =>
        props.icon ??
        (props.type === 'search' ? (
            <IconInterfaceSearchMagnifyingGlass />
        ) : null);

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
            <div class='flex flex-row gap-2'>
                <div
                    class={cn(
                        'flex flex-row items-center gap-2 rounded-default border border-border bg-surface-3/30 p-1 px-3 py-2.5 focus-within:ring-2 focus-within:ring-accent',
                        error() && 'bg-danger/30 focus-within:ring-danger',
                    )}
                >
                    <Show when={getIcon()}>
                        <label
                            class='flex items-center opacity-50 *:size-5'
                            for={id}
                        >
                            {getIcon()}
                        </label>
                    </Show>
                    <input
                        aria-invalid={Boolean(error())}
                        autocomplete='off'
                        autofocus={props.autoFocus}
                        class={cn(
                            'grow text-sm placeholder:text-text-muted focus:outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
                            props.class,
                        )}
                        id={id}
                        maxLength={props.maxLength}
                        minLength={props.minLength}
                        onInput={(e) => handleInput(e.currentTarget.value)}
                        placeholder={
                            props.placeholder ??
                            (props.type === 'search' ? 'Search' : undefined)
                        }
                        required={props.required}
                        type={internalInputType()}
                        value={internalValue()}
                    />
                    {props.badge}
                    <Show when={props.type === 'password'}>
                        <Show
                            fallback={
                                <IconEditShow
                                    aria-label='Show password'
                                    class='cursor-pointer opacity-50 hover:opacity-100'
                                    onClick={() =>
                                        setInternalInputType('password')
                                    }
                                />
                            }
                            when={internalInputType() === 'password'}
                        >
                            <IconEditHide
                                aria-label='Hide password'
                                class='cursor-pointer opacity-50 hover:opacity-100'
                                onClick={() => setInternalInputType('text')}
                            />
                        </Show>
                    </Show>
                    <IconMenuCloseMd
                        class='cursor-pointer opacity-50 hover:opacity-100'
                        onClick={() => {
                            const value = '';

                            setInternalValue(value);
                            props.onInput?.(value);
                        }}
                        style={{
                            visibility:
                                internalValue().length > 0
                                    ? 'visible'
                                    : 'hidden',
                        }}
                    />
                </div>
                {props.children}
            </div>
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
