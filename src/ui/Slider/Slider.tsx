import {
    type Accessor,
    createContext,
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

    return (
        <input
            class={cn('accent-accent', props.class)}
            disabled={ctx.disabled()}
            id={ctx.id()}
            list={ctx.list()}
            max={ctx.max()}
            min={ctx.min()}
            onChange={(e) => ctx.onChange?.(e.currentTarget.valueAsNumber)}
            onInput={(e) => ctx.onInput?.(e.currentTarget.valueAsNumber)}
            step={ctx.step()}
            type='range'
            value={ctx.value()}
        />
    );
};

Slider.Input = SliderInput;
Slider.Label = SliderLabel;
