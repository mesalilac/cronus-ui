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

import { IconInterfaceSearchMagnifyingGlass, IconMenuCloseMd } from '~/icons';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type InputProps = {
    type?: 'text' | 'search';
    value: string;
    onInput?: (value: string) => void;
    validate?: (value: string, isDirty: boolean) => string | undefined;
    placeholder?: string;
    label?: string;
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
            <div class='flex flex-row gap-2'>
                <div
                    class={cn(
                        'flex flex-row items-center gap-1 rounded-lg border border-neutral-600 bg-neutral-700/30 p-1 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500',
                        error() && 'bg-red-500/30 focus-within:ring-red-500',
                    )}
                >
                    <div class='pointer-events-none flex items-center opacity-50 **:size-5'>
                        <label for={id}>
                            <Switch>
                                <Match when={props.icon}>{props.icon}</Match>
                                <Match when={props.type === 'search'}>
                                    <IconInterfaceSearchMagnifyingGlass />
                                </Match>
                            </Switch>
                        </label>
                    </div>
                    <input
                        aria-describedby={
                            error() ? `error, ${error()}` : props.label
                        }
                        aria-invalid={Boolean(error())}
                        autocomplete='off'
                        autofocus={props.autoFocus}
                        class={cn(
                            'grow pl-2 text-sm placeholder:text-neutral-500 focus:outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
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
                        type={props.type}
                        value={internalValue()}
                    />
                    {props.badge}
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
                    <HelperText variant='error'>{error()}</HelperText>
                </Match>
                <Match when={props.helper}>
                    <HelperText>{props.helper}</HelperText>
                </Match>
            </Switch>
        </div>
    );
};
