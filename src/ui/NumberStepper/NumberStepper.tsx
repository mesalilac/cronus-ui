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
import { FieldLabel } from '~/ui/FieldLabel';
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
                {(label) => (
                    <FieldLabel
                        id={id}
                        label={label()}
                        required={props.required}
                    />
                )}
            </Show>
            <div
                class={cn(
                    'flex items-center gap-1 rounded-default bg-surface-3/30 p-1 focus-within:ring-2 focus-within:ring-accent has-invalid:ring-2 has-invalid:ring-danger',
                    props.class,
                )}
            >
                <Button
                    class='disabled:bg-transparent'
                    data-slot='decrement-button'
                    disabled={props.disabled || props.min === props.value}
                    onClick={handleDecrement}
                    size='icon'
                    variant='ghost'
                >
                    <IconEditRemoveMinus size='1.5rem' />
                </Button>
                <input
                    class={cn(
                        'min-w-24 max-w-24 border-border/30 border-x text-center caret-accent outline-none [appearance:textfield] focus:outline-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
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
                    disabled={props.disabled || props.max === props.value}
                    onClick={handleIncrement}
                    size='icon'
                    variant='ghost'
                >
                    <IconEditAddPlus size='1.5rem' />
                </Button>
            </div>

            <Switch>
                <Match when={getError()}>
                    <HelperText variant='danger'>{getError()}</HelperText>
                </Match>
                <Match when={props.helperText}>
                    <HelperText>{props.helperText}</HelperText>
                </Match>
            </Switch>
        </div>
    );
};
