import {
    type Accessor,
    createContext,
    createEffect,
    createSignal,
    type FlowComponent,
    type JSX,
    Match,
    onCleanup,
    onMount,
    type Setter,
    Switch,
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

    Button: typeof ShowMoreButton;
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

type ShowMoreButtonProps = {
    class?: string;
    children?: (isExpanded: boolean) => JSX.Element;
};

const ShowMoreButton = (props: ShowMoreButtonProps) => {
    const ctx = useShowMoreContext();

    return (
        <Button
            class={cn('justify-center', props.class)}
            onClick={() => ctx.setIsExpanded((prev) => !prev)}
            variant={ctx.isExpanded() ? 'outline' : 'secondary'}
        >
            <Switch>
                <Match when={props.children}>
                    {props.children?.(ctx.isExpanded())}
                </Match>
                <Match when={!ctx.isExpanded()}>Show More</Match>
                <Match when={ctx.isExpanded()}>Show less</Match>
            </Switch>
        </Button>
    );
};

ShowMore.Button = ShowMoreButton;
ShowMore.Content = ShowMoreContent;
