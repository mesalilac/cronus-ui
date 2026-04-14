import {
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    type JSX,
    Match,
    Show,
    Switch,
    type VoidComponent,
} from 'solid-js';

import { IconEditAddPlus, IconEditRemoveMinus } from '~/icons';
import { Button } from '~/ui/Button';
import { HelperText } from '~/ui/HelperText';
import { cn } from '~/utils';

export type NumberStepperProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    label?: JSX.Element;
    required?: boolean;
    helperText?: JSX.Element;
    validate?: (value: number, isDirty: boolean) => string | undefined;
    class?: string;
};

export const NumberStepper: VoidComponent<NumberStepperProps> = (props) => {
    const id = createUniqueId();

    const [input, setInput] = createSignal<string>(props.value.toString());

    const [isDirty, setIsDirty] = createSignal(false);

    const getError = createMemo(() => {
        const validationError = props.validate?.(Number(input()), isDirty());

        if (props.required && (input() === '' || props.value === undefined))
            return 'This field is required';

        return validationError;
    });

    createEffect(() => {
        setInput(props.value.toString());
    });

    const handleUpdate = (nextValue: number) => {
        setIsDirty(true);

        props.onChange(nextValue);
        setInput(nextValue.toString());
    };

    const normalizeNumber = (value: number): number | undefined => {
        if (Number.isNaN(value)) return;

        if (props.min !== undefined && value < props.min) value = props.min;
        if (props.max !== undefined && value > props.max) value = props.max;

        return value;
    };

    const getStep = () => Math.abs(props.step ?? 1) || 1;

    const handleIncrement = () => {
        const nextValue = normalizeNumber(props.value + getStep());
        if (nextValue === undefined) return;

        handleUpdate(nextValue);
    };

    const handleDecrement = () => {
        const nextValue = normalizeNumber(props.value - getStep());
        if (nextValue === undefined) return;

        handleUpdate(nextValue);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            handleIncrement();
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            handleDecrement();
        }
    };

    return (
        <div class='flex flex-col gap-2'>
            <Show when={props.label}>
                <label
                    class='flex gap-1 font-bold text-neutral-200 text-sm capitalize'
                    for={id}
                >
                    <span>{props.label}</span>
                    <Show when={props.required}>
                        <span class='text-red-500' title='required'>
                            *
                        </span>
                    </Show>
                </label>
            </Show>
            <div
                class={cn(
                    'flex items-center gap-1 rounded-lg bg-neutral-700/30 p-1 focus-within:ring-2 focus-within:ring-blue-500 has-invalid:ring-2 has-invalid:ring-red-500',
                    props.class,
                )}
            >
                <Button
                    class='disabled:bg-transparent'
                    data-slot='decrement-button'
                    disabled={props.disabled}
                    onClick={handleDecrement}
                    variant='icon'
                >
                    <IconEditRemoveMinus size='1.5rem' />
                </Button>
                <input
                    class={cn(
                        'min-w-24 max-w-24 border-neutral-600/30 border-x text-center outline-none [appearance:textfield] focus:outline-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
                    )}
                    data-slot='number-input'
                    disabled={props.disabled}
                    id={id}
                    inputMode='numeric'
                    max={props.max}
                    min={props.min}
                    onChange={(e) => {
                        const raw = e.currentTarget.value.trim();
                        setInput(raw);

                        const value = Number(raw);
                        const nextValue = normalizeNumber(value);
                        if (nextValue === undefined) return;

                        handleUpdate(nextValue);
                        setInput(nextValue.toString());
                    }}
                    onKeyDown={handleKeyDown}
                    pattern='^[0-9]+(\.[0-9]+)?$'
                    step='any'
                    type='number'
                    value={input()}
                />
                <Button
                    class='disabled:bg-transparent'
                    data-slot='increment-button'
                    disabled={props.disabled}
                    onClick={handleIncrement}
                    variant='icon'
                >
                    <IconEditAddPlus size='1.5rem' />
                </Button>
            </div>

            <Switch>
                <Match when={getError()}>
                    <span class='text-red-500 text-sm'>{getError()}</span>
                </Match>
                <Match when={props.helperText}>
                    <HelperText text={props.helperText} />
                </Match>
            </Switch>
        </div>
    );
};
