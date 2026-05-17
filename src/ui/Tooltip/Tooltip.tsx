import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSXElement,
    on,
    type ParentComponent,
    useContext,
} from 'solid-js';

export type TooltipProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelayMs?: number;
    closeDelayMs?: number;
    children: JSXElement;
};

export const TooltipContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: (open: boolean) => void;

    openDelayMs: Accessor<number | undefined>;
    closeDelayMs: Accessor<number | undefined>;
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

export const Tooltip: TooltipCompound = (props) => {
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

    return (
        <TooltipContext.Provider
            value={{
                isOpen,
                setIsOpen,
                openDelayMs: () => props.openDelayMs,
                closeDelayMs: () => props.closeDelayMs,
            }}
        >
            {props.children}
        </TooltipContext.Provider>
    );
};

export const Trigger: ParentComponent<{ class?: string }> = (props) => {
    return <div>Tooltip</div>;
};

export const Content: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

type TooltipCompound = {
    (props: TooltipProps): JSXElement;
    Trigger: typeof Trigger;
    Content: typeof Content;
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;
