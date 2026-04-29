import {
    type Accessor,
    createContext,
    createMemo,
    createUniqueId,
    type JSX,
    Show,
    useContext,
} from 'solid-js';

import { clamp, cn } from '~/utils';

export const ProgressbarContext = createContext<{
    id: Accessor<string>;
    value: Accessor<number>;
    max: Accessor<number>;

    getPercent: Accessor<number>;
}>();

export const useProgressbarContext = () => {
    const context = useContext(ProgressbarContext);
    if (!context) {
        throw new Error(
            'useProgressbarContext must be used within the ProgressbarContext provider',
        );
    }
    return context;
};

export type ProgressbarProps = {
    id?: string;
    value: number;
    max?: number;
    class?: string;
    children: JSX.Element;
};

type ProgressbarCompound = {
    (props: ProgressbarProps): JSX.Element;

    Label: typeof ProgressbarLabel;
    Bar: typeof ProgressbarBar;
};

export const Progressbar: ProgressbarCompound = (props) => {
    const id = createUniqueId();

    const getMax = () => props.max ?? 100;

    const getPercent = createMemo(() => {
        const clamped = clamp(props.value, 0, getMax());

        return (clamped / getMax()) * 100;
    });

    return (
        <ProgressbarContext.Provider
            value={{
                id: () => props.id ?? id,
                value: () => props.value,
                max: getMax,
                getPercent,
            }}
        >
            <div class={cn('flex flex-col gap-2', props.class)}>
                {props.children}
            </div>
        </ProgressbarContext.Provider>
    );
};

type ProgressbarLabelProps = {
    class?: string;
    children: JSX.Element | ((percent: number) => JSX.Element);
};

const ProgressbarLabel = (props: ProgressbarLabelProps) => {
    const ctx = useProgressbarContext();

    return (
        <label
            class={cn(
                'font-bold text-sm text-text-primary capitalize',
                props.class,
            )}
            for={ctx.id()}
        >
            {typeof props.children === 'function'
                ? props.children(ctx.getPercent())
                : props.children}
        </label>
    );
};

type ProgressbarBarProps = {
    class?: string;
};

const ProgressbarBar = (props: ProgressbarBarProps) => {
    const ctx = useProgressbarContext();

    return (
        <div class='relative w-full'>
            <progress
                class={cn(
                    'block w-full rounded-full bg-surface-3 [&::-moz-progress-bar]:bg-accent [&::-webkit-progress-bar]:bg-accent',
                    props.class,
                )}
                id={ctx.id()}
                max={ctx.max()}
                value={ctx.value()}
            />

            <Show when={ctx.getPercent() >= 5}>
                <span
                    aria-hidden
                    class='absolute top-0 -translate-x-1/2 select-none font-medium text-text-primary text-xs'
                    style={{
                        left: `${ctx.getPercent() / 2}%`,
                    }}
                >
                    {Math.round(ctx.getPercent())}%
                </span>
            </Show>
        </div>
    );
};

Progressbar.Label = ProgressbarLabel;
Progressbar.Bar = ProgressbarBar;
