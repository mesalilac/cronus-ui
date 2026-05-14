import {
    type Accessor,
    createContext,
    createMemo,
    createUniqueId,
    type JSX,
    useContext,
} from 'solid-js';

import { Label } from '~/ui/Label';
import { cn } from '~/utils';

export type SliderProps = {
    id?: string;
    value: number;
    onChange?: (value: number) => void;
    onInput?: (value: number) => void;
    /**
     * The lowest value in the range of permitted values.
     *
     * @default 0
     */
    min?: number;
    /**
     * The greatest value in the range of permitted values.
     *
     * @default 100
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#min}
     */
    max?: number;
    /**
     * The `step` attribute is a number that specifies the granularity that the value must adhere to.
     *
     * @default 1
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#max}
     */
    step?: number;
    /**
     * The value of the `list` attribute is the id of a `<datalist>` element located in the same document.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#list}
     */
    list?: string;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const SliderContext = createContext<{
    id: Accessor<string>;
    value: Accessor<number>;
    onChange?: (value: number) => void;
    onInput?: (value: number) => void;
    min: Accessor<number>;
    max: Accessor<number>;
    step: Accessor<number>;
    disabled: Accessor<boolean | undefined>;
    list: Accessor<string | undefined>;
}>();

export const useSliderContext = () => {
    const context = useContext(SliderContext);

    if (!context) {
        throw new Error(
            'useSliderContext must be used within the SliderContext provider',
        );
    }

    return context;
};

export const Slider = (props: SliderProps) => {
    const fallbackId = createUniqueId();

    return (
        <SliderContext.Provider
            value={{
                id: () => props.id ?? fallbackId,
                value: () => props.value,
                onChange: props.onChange,
                onInput: props.onInput,
                min: () => props.min ?? 0,
                max: () => props.max ?? 100,
                step: () => props.step ?? 1,
                disabled: () => props.disabled,
                list: () => props.list,
            }}
        >
            <div class={cn('flex flex-col gap-2', props.class)}>
                {props.children}
            </div>
        </SliderContext.Provider>
    );
};

type SliderLabelProps = {
    class?: string;
    children: JSX.Element;
};

const SliderLabel = (props: SliderLabelProps) => {
    const ctx = useSliderContext();

    return (
        <Label class={props.class} for={ctx.id()}>
            {props.children}
        </Label>
    );
};

type SliderInputProps = {
    class?: string;
};

const SliderInput = (props: SliderInputProps) => {
    const ctx = useSliderContext();

    const getPercent = createMemo(() => {
        const min = ctx.min();
        const max = ctx.max();
        const value = ctx.value();

        return ((value - min) / (max - min)) * 100;
    });

    return (
        <input
            class={cn(
                'h-4 w-full cursor-pointer appearance-none rounded-full bg-transparent disabled:cursor-auto disabled:opacity-50',

                // Webkit track
                '[&::-webkit-slider-runnable-track]:h-2',
                '[&::-webkit-slider-runnable-track]:rounded-full',
                '[&::-webkit-slider-runnable-track]:bg-surface-3/30',
                '[&::-webkit-slider-runnable-track]:bg-[linear-gradient(90deg,var(--color-accent)_var(--p),color-mix(in_oklab,var(--color-surface-3)_30%,transparent)_var(--p))]',

                // Webkit thumb
                '[&::-webkit-slider-thumb:hover]:brightness-110',
                '[&::-webkit-slider-thumb:active]:scale-110',
                '[&::-webkit-slider-thumb]:transition-transform',
                '[&::-webkit-slider-thumb]:duration-150',
                '[&::-webkit-slider-thumb]:ease-out',
                '[&::-webkit-slider-thumb]:transform',
                '[&::-webkit-slider-thumb]:-mt-1.5',
                '[&::-webkit-slider-thumb]:size-5',
                '[&::-webkit-slider-thumb]:appearance-none',
                '[&::-webkit-slider-thumb]:rounded-full',
                '[&::-webkit-slider-thumb]:border',
                '[&::-webkit-slider-thumb]:border-border',
                '[&::-webkit-slider-thumb]:bg-accent',

                // Firefox progress
                '[&::-moz-range-progress]:h-2',
                '[&::-moz-range-progress]:rounded-full',
                '[&::-moz-range-progress]:bg-accent',

                // Firefox track
                '[&::-moz-range-track]:h-2',
                '[&::-moz-range-track]:rounded-full',
                '[&::-moz-range-track]:bg-surface-3/30',

                // Firefox thumb
                '[&::-moz-range-thumb:hover]:brightness-110',
                '[&::-moz-range-thumb:active]:scale-110',
                '[&::-moz-range-thumb]:transition-transform',
                '[&::-moz-range-thumb]:duration-150',
                '[&::-moz-range-thumb]:ease-out',
                '[&::-moz-range-thumb]:transform',
                '[&::-moz-range-thumb]:size-5',
                '[&::-moz-range-thumb]:rounded-full',
                '[&::-moz-range-thumb]:border',
                '[&::-moz-range-thumb]:border-border',
                '[&::-moz-range-thumb]:bg-accent',

                props.class,
            )}
            disabled={ctx.disabled()}
            id={ctx.id()}
            list={ctx.list()}
            max={ctx.max()}
            min={ctx.min()}
            onChange={(e) => ctx.onChange?.(e.currentTarget.valueAsNumber)}
            onInput={(e) => ctx.onInput?.(e.currentTarget.valueAsNumber)}
            step={ctx.step()}
            style={{
                '--p': `${getPercent()}%`,
            }}
            type='range'
            value={ctx.value()}
        />
    );
};

Slider.Input = SliderInput;
Slider.Label = SliderLabel;
