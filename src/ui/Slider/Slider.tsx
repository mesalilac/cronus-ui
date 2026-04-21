import { type Component, type JSX, Show } from 'solid-js';

export type SliderProps = {
    id?: string;
    value: number;
    onChange?: (value: number) => void;
    onInput?: (value: number) => void;
    /**
     * @default 0
     */
    min?: number;
    /**
     * @default 100
     */
    max?: number;
    /**
     * @default 1
     */
    step?: number;
    disabled?: boolean;
    list?: string;
    label?: JSX.Element;
    class?: string;
};

export const Slider: Component<SliderProps> = (props) => {
    return (
        <div class='flex flex-col gap-1'>
            <Show when={props.label}>{props.label}</Show>
            <input
                class='accent-accent'
                data-slot='slider'
                disabled={props.disabled}
                id={props.id}
                list={props.list}
                max={props.max}
                min={props.min}
                onChange={(e) =>
                    props.onChange?.(e.currentTarget.valueAsNumber)
                }
                onInput={(e) => props.onInput?.(e.currentTarget.valueAsNumber)}
                step={props.step}
                type='range'
                value={props.value}
            />
        </div>
    );
};
