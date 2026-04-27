import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSX,
    on,
    Show,
    useContext,
} from 'solid-js';

import { IconArrowCaretDownMd } from '~/icons';
import { Button } from '~/ui/Button';
import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type CollapsibleProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    defaultOpen?: boolean;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const CollapsibleContext = createContext<{
    isOpen: Accessor<boolean>;
    setIsOpen: (value: boolean) => void;
    disabled: Accessor<boolean | undefined>;
}>();

export const useCollapsibleContext = () => {
    const context = useContext(CollapsibleContext);

    if (!context) {
        throw new Error(
            'useCollapsibleContext must be used within the CollapsibleContext provider',
        );
    }

    return context;
};

export const Collapsible = (props: CollapsibleProps) => {
    const [isOpen, setInternalIsOpen] = createSignal(
        props.open ?? props.defaultOpen ?? false,
    );

    createComputed(
        on(
            () => Boolean(props.open),
            (isOpen) => {
                setInternalIsOpen(isOpen);
                props.onOpenChange?.(isOpen);
            },
            { defer: true },
        ),
    );

    const setIsOpen = (open: boolean) => {
        if (props.open === undefined) setInternalIsOpen(open);
        props.onOpenChange?.(open);
    };

    return (
        <CollapsibleContext.Provider
            value={{
                isOpen,
                setIsOpen,
                disabled: () => props.disabled,
            }}
        >
            <div
                class={cn(
                    'flex flex-col rounded-default border border-border-strong',
                    props.class,
                )}
                data-slot='collapsible'
            >
                {props.children}
            </div>
        </CollapsibleContext.Provider>
    );
};

type CollapsibleTriggerProps = {
    class?: string;
    children: JSX.Element;
};

const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
    const ctx = useCollapsibleContext();

    return (
        <Button
            class={cn(
                'justify-between rounded-none border-transparent outline-none active:bg-transparent active:text-accent',
                ctx.isOpen() && 'text-accent',
                props.class,
            )}
            data-slot='trigger'
            data-state={ctx.isOpen() ? 'expanded' : 'closed'}
            data-state-disabled={ctx.disabled()}
            disabled={ctx.disabled()}
            onClick={() => ctx.setIsOpen(!ctx.isOpen())}
            variant='outline'
        >
            {props.children}
            <IconArrowCaretDownMd
                class={cn(
                    'size-5 transition-transform duration-200',
                    !ctx.isOpen() && '-rotate-90',
                )}
            />
        </Button>
    );
};

type CollapsibleContentProps = {
    class?: string;
    children: JSX.Element;
};

const CollapsibleContent = (props: CollapsibleContentProps) => {
    const ctx = useCollapsibleContext();

    return (
        <Show when={ctx.isOpen()}>
            <Separator class='starting:w-0 w-full border-accent transition-[width] duration-200' />
            <div
                class={cn(
                    'rounded-b-default px-4 py-2 text-sm text-text-secondary',
                    props.class,
                )}
                data-slot='content'
                data-state={ctx.isOpen() ? 'expanded' : 'closed'}
                data-state-disabled={ctx.disabled()}
            >
                {props.children}
            </div>
        </Show>
    );
};

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Content = CollapsibleContent;
