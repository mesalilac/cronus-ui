import gsap from 'gsap';
import {
    type Accessor,
    type ComponentProps,
    createContext,
    createMemo,
    createSignal,
    createUniqueId,
    type JSXElement,
    mergeProps,
    onCleanup,
    onMount,
    type Setter,
    Show,
    useContext,
} from 'solid-js';
import { Transition } from 'solid-transition-group';

import type { TimeoutHandle } from '~/types';
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
    children: JSXElement;
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

    inputRef: Accessor<HTMLInputElement | undefined>;
    setInputRef: Setter<HTMLInputElement | undefined>;
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

export const Slider = (rawProps: SliderProps) => {
    const props = mergeProps(
        {
            min: 0,
            max: 100,
            step: 1,
        } satisfies Partial<SliderProps>,
        rawProps,
    );

    const [inputRef, setInputRef] = createSignal<
        HTMLInputElement | undefined
    >();

    const fallbackId = createUniqueId();

    return (
        <SliderContext.Provider
            value={{
                id: () => props.id ?? fallbackId,
                value: () => props.value,
                onChange: props.onChange,
                onInput: props.onInput,
                min: () => props.min,
                max: () => props.max,
                step: () => props.step,
                disabled: () => props.disabled,
                list: () => props.list,
                inputRef,
                setInputRef,
            }}
        >
            <div class={cn('relative flex flex-col gap-2', props.class)}>
                {props.children}
            </div>
        </SliderContext.Provider>
    );
};

type SliderLabelProps = {
    class?: string;
    children: JSXElement;
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
    hideThumb?: boolean;
};

const SliderInput = (props: SliderInputProps) => {
    const ctx = useSliderContext();

    const getPercent = createMemo(
        () => ((ctx.value() - ctx.min()) / (ctx.max() - ctx.min())) * 100,
    );

    return (
        <input
            class={cn(
                'h-4 w-full appearance-none rounded-full bg-transparent disabled:cursor-auto disabled:opacity-50',

                'active:[&::-moz-range-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-110',

                // Webkit track
                '[&::-webkit-slider-runnable-track]:h-2',
                '[&::-webkit-slider-runnable-track]:rounded-full',
                '[&::-webkit-slider-runnable-track]:bg-surface-3/30',
                '[&::-webkit-slider-runnable-track]:bg-[linear-gradient(90deg,var(--color-accent)_var(--p),color-mix(in_oklab,var(--color-surface-3)_30%,transparent)_var(--p))]',

                // Webkit thumb
                '[&::-webkit-slider-thumb]:cursor-ew-resize',
                '[&::-webkit-slider-thumb:hover]:brightness-110',
                '[&::-webkit-slider-thumb]:transition-transform',
                '[&::-webkit-slider-thumb]:duration-150',
                '[&::-webkit-slider-thumb]:ease-out',
                '[&::-webkit-slider-thumb]:transform',
                '[&::-webkit-slider-thumb]:-mt-1.5',
                '[&::-webkit-slider-thumb]:size-5',
                '[&::-webkit-slider-thumb]:appearance-none',
                '[&::-webkit-slider-thumb]:rounded-full',
                '[&::-webkit-slider-thumb]:border-0',
                '[&::-webkit-slider-thumb]:outline',
                '[&::-webkit-slider-thumb]:outline-border-subtle',
                '[&::-webkit-slider-thumb]:bg-white',

                // Firefox progress
                '[&::-moz-range-progress]:h-2',
                '[&::-moz-range-progress]:rounded-full',
                '[&::-moz-range-progress]:bg-accent',

                // Firefox track
                '[&::-moz-range-track]:h-2',
                '[&::-moz-range-track]:rounded-full',
                '[&::-moz-range-track]:bg-surface-3/30',

                // Firefox thumb
                '[&::-moz-range-thumb]:cursor-ew-resize',
                '[&::-moz-range-thumb:hover]:brightness-110',
                '[&::-moz-range-thumb]:transition-transform',
                '[&::-moz-range-thumb]:duration-150',
                '[&::-moz-range-thumb]:ease-out',
                '[&::-moz-range-thumb]:transform',
                '[&::-moz-range-thumb]:size-5',
                '[&::-moz-range-thumb]:rounded-full',
                '[&::-moz-range-thumb]:border-0',
                '[&::-moz-range-thumb]:outline',
                '[&::-moz-range-thumb]:outline-border-subtle',
                '[&::-moz-range-thumb]:bg-white',

                props.hideThumb &&
                    '[&::-moz-range-thumb]:invisible [&::-webkit-slider-thumb]:invisible',

                props.class,
            )}
            disabled={ctx.disabled()}
            id={ctx.id()}
            list={ctx.list()}
            max={ctx.max()}
            min={ctx.min()}
            onChange={(e) => ctx.onChange?.(e.currentTarget.valueAsNumber)}
            onInput={(e) => ctx.onInput?.(e.currentTarget.valueAsNumber)}
            ref={ctx.setInputRef}
            step={ctx.step()}
            style={{
                '--p': `${getPercent()}%`,
            }}
            type='range'
            value={ctx.value()}
        />
    );
};

const SliderToolTip = (rawProps: {
    class?: string;
    placement?: 'top' | 'bottom';
    /**
     * px offset from input
     * @default 8
     */
    offset?: number;
    children?: (value: number) => JSXElement;
}) => {
    const ctx = useSliderContext();

    const props = mergeProps(
        {
            placement: 'top',
            offset: 8,
        } satisfies Partial<ComponentProps<typeof SliderToolTip>>,
        rawProps,
    );

    let openTimer: TimeoutHandle;

    const [isOpen, setIsOpen] = createSignal(false);

    const abortCtrl = new AbortController();

    const thumbSize = 20; // px

    const calcX = () => {
        const el = ctx.inputRef();
        if (!el) return '0px';

        const rect = el.getBoundingClientRect();

        const percent = (ctx.value() - ctx.min()) / (ctx.max() - ctx.min());

        const x = percent * (rect.width - thumbSize) + thumbSize / 2;

        return `${x}px`;
    };

    const calcY = () => {
        const el = ctx.inputRef();
        if (!el) return '0px';

        const rect = el.getBoundingClientRect();

        const y = rect.height + props.offset;

        return `${y}px`;
    };

    onMount(() => {
        ctx.inputRef()?.addEventListener(
            'mousedown',
            () => {
                clearTimeout(openTimer);
                openTimer = setTimeout(() => setIsOpen(true), 150);
            },
            abortCtrl,
        );

        ctx.inputRef()?.addEventListener(
            'mouseup',
            () => {
                clearTimeout(openTimer);
                setIsOpen(false);
            },
            abortCtrl,
        );
    });

    onCleanup(() => {
        abortCtrl.abort();
    });

    return (
        <Transition
            onEnter={(el, done) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: done,
                });
            }}
            onExit={(el, done) => {
                gsap.to(el, {
                    autoAlpha: 1,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: done,
                });
            }}
        >
            <Show when={isOpen()}>
                <div
                    aria-hidden
                    class={cn(
                        'absolute flex gap-1 text-nowrap rounded-default bg-accent p-2 text-sm text-text-primary shadow-default outline outline-border',
                        props.class,
                    )}
                    role='tooltip'
                    style={{
                        left: calcX(),
                        top: props.placement === 'bottom' ? calcY() : '',
                        bottom: props.placement === 'top' ? calcY() : '',
                        transform: `translateX(-50%)`,
                    }}
                >
                    {props.children
                        ? props.children?.(ctx.value())
                        : ctx.value()}
                </div>
            </Show>
        </Transition>
    );
};

Slider.Input = SliderInput;
Slider.Label = SliderLabel;
Slider.ToolTip = SliderToolTip;
