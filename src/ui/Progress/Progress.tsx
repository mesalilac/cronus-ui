import {
    type Accessor,
    createContext,
    createMemo,
    createUniqueId,
    type JSX,
    Show,
    useContext,
} from 'solid-js';

import { Label } from '~/ui/Label';
import { clamp, cn } from '~/utils';

export const ProgressContext = createContext<{
    id: Accessor<string>;
    value: Accessor<number>;
    max: Accessor<number>;

    getPercent: Accessor<number>;
}>();

export const useProgressContext = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error(
            'useProgressContext must be used within the ProgressContext provider',
        );
    }
    return context;
};

export type ProgressProps = {
    id?: string;
    value: number;
    max?: number;
    class?: string;
    children?: JSX.Element;
};

type ProgressCompound = {
    (props: ProgressProps): JSX.Element;

    Label: typeof ProgressLabel;
    Bar: typeof ProgressBar;
};

export const Progress: ProgressCompound = (props) => {
    const id = createUniqueId();

    const getMax = () => props.max ?? 100;

    const getPercent = createMemo(() => {
        const clamped = clamp(props.value, 0, getMax());

        return (clamped / getMax()) * 100;
    });

    return (
        <ProgressContext.Provider
            value={{
                id: () => props.id ?? id,
                value: () => props.value,
                max: getMax,
                getPercent,
            }}
        >
            <div class={cn('flex flex-col gap-2', props.class)}>
                {props.children ?? <ProgressBar />}
            </div>
        </ProgressContext.Provider>
    );
};

type ProgressLabelProps = {
    class?: string;
    children: JSX.Element | ((percent: number) => JSX.Element);
};

const ProgressLabel = (props: ProgressLabelProps) => {
    const ctx = useProgressContext();

    return (
        <Label class={props.class} for={ctx.id()}>
            {typeof props.children === 'function'
                ? props.children(ctx.getPercent())
                : props.children}
        </Label>
    );
};

type ProgressBarProps = {
    class?: string;
};

const ProgressBar = (props: ProgressBarProps) => {
    const ctx = useProgressContext();

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

Progress.Label = ProgressLabel;
Progress.Bar = ProgressBar;
