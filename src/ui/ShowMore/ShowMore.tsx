import {
    type Accessor,
    createContext,
    createEffect,
    createSignal,
    type FlowComponent,
    type JSX,
    onCleanup,
    onMount,
    type Setter,
    Show,
    useContext,
} from 'solid-js';

import { Button } from '~/ui/Button';
import { cn } from '~/utils';

export const ShowMoreContext = createContext<{
    isOverflowing: Accessor<boolean>;
    setIsOverflowing: Setter<boolean>;
    isExpanded: Accessor<boolean>;
    setIsExpanded: Setter<boolean>;
}>();

export const useShowMoreContext = () => {
    const context = useContext(ShowMoreContext);
    if (!context) {
        throw new Error(
            'useShowMoreContext must be used within the ShowMoreContext provider',
        );
    }
    return context;
};

export type ShowMoreProps = {
    class?: string;
    defaultExpanded?: boolean;
    children: JSX.Element;
};

type ShowMoreCompound = {
    (props: ShowMoreProps): JSX.Element;

    Trigger: typeof ShowMoreTrigger;
    ReadMore: typeof ShowMoreReadMoreTrigger;
    Content: typeof ShowMoreContent;
};

export const ShowMore: ShowMoreCompound = (props) => {
    const [isExpanded, setIsExpanded] = createSignal(
        props.defaultExpanded ?? false,
    );

    const [isOverflowing, setIsOverflowing] = createSignal(false);

    return (
        <ShowMoreContext.Provider
            value={{
                isExpanded,
                setIsExpanded,
                isOverflowing,
                setIsOverflowing,
            }}
        >
            <div class={cn('flex flex-col gap-2', props.class)}>
                {props.children}
            </div>
        </ShowMoreContext.Provider>
    );
};

type ShowMoreContentProps = {
    class?: string;
};

const ShowMoreContent: FlowComponent<ShowMoreContentProps> = (props) => {
    const ctx = useShowMoreContext();

    let contentRef!: HTMLDivElement;
    let resizeObserver: ResizeObserver | undefined;

    const measure = () => {
        if (!contentRef) return;

        const overflowing =
            contentRef.scrollHeight > contentRef.clientHeight + 1;

        ctx.setIsOverflowing(overflowing);
    };

    onMount(() => {
        measure();

        resizeObserver = new ResizeObserver(() => {
            measure();
        });

        if (contentRef) {
            resizeObserver.observe(contentRef);
        }
    });

    createEffect(() => {
        ctx.isExpanded();
        queueMicrotask(measure);
    });

    onCleanup(() => {
        resizeObserver?.disconnect();
    });

    return (
        <div
            class={cn(
                'overflow-hidden',
                props.class,
                ctx.isExpanded() && 'max-h-none',
            )}
            ref={contentRef}
        >
            {props.children}
        </div>
    );
};

type ShowMoreTriggerProps = {
    class?: string;
    children?: (
        isExpanded: boolean,
        setIsExpanded: Setter<boolean>,
    ) => JSX.Element;
};

const ShowMoreTrigger = (props: ShowMoreTriggerProps) => {
    const ctx = useShowMoreContext();

    return (
        <Show
            fallback={props.children?.(ctx.isExpanded(), ctx.setIsExpanded)}
            when={!props.children}
        >
            <Button
                class={cn('justify-center', props.class)}
                onClick={() => ctx.setIsExpanded((prev) => !prev)}
                variant={ctx.isExpanded() ? 'outline' : 'solid'}
            >
                <Show fallback={<>Show More</>} when={ctx.isExpanded()}>
                    Show less
                </Show>
            </Button>
        </Show>
    );
};

/** Custom Trigger for text */
const ShowMoreReadMoreTrigger = (props: ShowMoreTriggerProps) => {
    const ctx = useShowMoreContext();

    return (
        <Show
            fallback={props.children?.(ctx.isExpanded(), ctx.setIsExpanded)}
            when={!props.children}
        >
            <span
                class='cursor-pointer text-accent underline'
                onClick={() => ctx.setIsExpanded((prev) => !prev)}
                role='none'
            >
                <Show fallback={<>Read More</>} when={ctx.isExpanded()}>
                    Read Less
                </Show>
            </span>
        </Show>
    );
};

ShowMore.Trigger = ShowMoreTrigger;
ShowMore.ReadMore = ShowMoreReadMoreTrigger;
ShowMore.Content = ShowMoreContent;
