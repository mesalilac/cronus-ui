import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSXElement,
    mergeProps,
    on,
    onCleanup,
    onMount,
    type ParentComponent,
    type Setter,
    splitProps,
    useContext,
    type ValidComponent,
} from 'solid-js';

import { Polymorphic, type PolymorphicProps } from '~/polymorphic';
import type { PartialComponentProps, Position2D } from '~/types';
import type { ButtonProps } from '~/ui/Button';
import { Button } from '~/ui/Button';
import {
    COMMON_POSITION_AREA,
    type CommonPositionArea,
    Popover,
    type TargetPositionArea,
} from '~/ui/Popover';
import { cn } from '~/utils';

type TooltipTriggerEvent = 'any' | 'hover' | 'click';

export type TooltipProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: CommonPositionArea;
    followMouse?: boolean;
    /*
     * Keeps the `Tooltip` open while the cursor is inside the `Tooltip` content
     */
    interactive?: boolean;
    openDelayMs?: number;
    closeDelayMs?: number;
    /**
     * @default 'hover'
     */
    triggerEvent?: TooltipTriggerEvent;
    children: JSXElement;
};

export const TooltipContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: (open: boolean) => void;
    placement: Accessor<CommonPositionArea>;
    followMouse: Accessor<boolean | undefined>;
    interactive: Accessor<boolean>;
    openDelayMs: Accessor<number | undefined>;
    closeDelayMs: Accessor<number | undefined>;
    triggerEvent: Accessor<TooltipTriggerEvent>;
    triggerRef: Accessor<HTMLElement | undefined>;
    setTriggerRef: Setter<HTMLElement | undefined>;
}>();

export const useTooltipContext = () => {
    const context = useContext(TooltipContext);

    if (!context) {
        throw new Error(
            'useTooltipContext must be used within the TooltipContext provider',
        );
    }

    return context;
};

export const Tooltip: TooltipCompound = (rawProps) => {
    const props = mergeProps(
        {
            openDelayMs: 600,
            triggerEvent: 'hover',
            placement: 'top',
            interactive: true,
        } satisfies PartialComponentProps<typeof Tooltip>,
        rawProps,
    );

    const [isOpen, setInternalIsOpen] = createSignal(
        props.open ?? props.defaultOpen ?? false,
    );

    createComputed(
        on(
            () => Boolean(props.open),
            (open) => {
                setInternalIsOpen(open);
            },
            { defer: true },
        ),
    );

    const setIsOpen = (open: boolean) => {
        if (props.open === undefined) setInternalIsOpen(open);
        props.onOpenChange?.(open);
    };

    const [triggerRef, setTriggerRef] = createSignal<HTMLElement | undefined>();

    return (
        <TooltipContext.Provider
            value={{
                isOpen,
                setIsOpen,
                placement: () => props.placement,
                followMouse: () => props.followMouse,
                interactive: () => props.interactive,
                openDelayMs: () => props.openDelayMs,
                closeDelayMs: () => props.closeDelayMs,
                triggerEvent: () => props.triggerEvent,
                triggerRef,
                setTriggerRef,
            }}
        >
            {props.children}
        </TooltipContext.Provider>
    );
};

type TriggerProps<T extends ValidComponent> = T extends typeof Button
    ? PolymorphicProps<T, ButtonProps>
    : PolymorphicProps<T>;

export const Trigger = <T extends ValidComponent = typeof Button>(
    props: TriggerProps<T>,
) => {
    const ctx = useTooltipContext();

    const [local, others] = splitProps(props, ['as']);

    return (
        <Polymorphic
            as={local.as ?? Button}
            ref={ctx.setTriggerRef}
            {...others}
        />
    );
};

export const Content: ParentComponent<{
    class?: string;
}> = (props) => {
    const ctx = useTooltipContext();

    const abortCtrl = new AbortController();

    const [mousePosition, setMousePosition] = createSignal<Position2D>({
        x: 0,
        y: 0,
    });

    const getEvent = () => {
        switch (ctx.triggerEvent()) {
            case 'click':
                return 'click';
            case 'hover':
                return 'mouseenter|mouseleave';
            default:
                return 'click|mouseenter|mouseleave';
        }
    };

    onMount(() => {
        if (!ctx.triggerRef() && ctx.followMouse()) return;

        ctx.triggerRef()?.addEventListener(
            'pointermove',
            (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            },
            abortCtrl,
        );
    });

    onCleanup(() => {
        abortCtrl.abort();
    });

    const getPlacement = (): TargetPositionArea => {
        if (ctx.followMouse()) {
            const offset = 2;

            const x = mousePosition().x + offset;
            const y = mousePosition().y + offset;

            return {
                top: () => `${y}px`,
                left: () => `${x}px`,
            };
        }

        return COMMON_POSITION_AREA[ctx.placement()];
    };

    return (
        <Popover
            closeDelay={ctx.closeDelayMs()}
            interactive={ctx.interactive()}
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            openDelay={ctx.openDelayMs()}
            positionTryFallbacks={() => [
                COMMON_POSITION_AREA.top,
                COMMON_POSITION_AREA.right,
                COMMON_POSITION_AREA.bottom,
                COMMON_POSITION_AREA.left,
            ]}
            targetPosition='fixed'
            targetPositionArea={getPlacement()}
            triggerElement={ctx.triggerRef()}
            triggerEvents={getEvent()}
        >
            <div
                class={cn(
                    'm-2 text-nowrap rounded-default bg-surface-2 p-2 text-sm text-text-primary shadow-default outline outline-border',
                    props.class,
                )}
            >
                {props.children}
            </div>
        </Popover>
    );
};

type TooltipCompound = {
    (props: TooltipProps): JSXElement;
    Trigger: typeof Trigger;
    Content: typeof Content;
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;
