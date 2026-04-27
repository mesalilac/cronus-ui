import {
    type Accessor,
    createComputed,
    createContext,
    createEffect,
    createSignal,
    createUniqueId,
    type JSX,
    on,
    useContext,
} from 'solid-js';

import { Collapsible } from '~/ui/Collapsible';
import { cn } from '~/utils';

export type AccordionProps = {
    value?: string | null;
    onChange?: (value: string | null) => void;
    defaultValue?: string;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const AccordionContext = createContext<{
    expandedItem: Accessor<string | null>;
    setExpandedItem: (value: string | null) => void;
    disabled: Accessor<boolean | undefined>;
}>();

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            'useAccordionContext must be used within the AccordionContext provider',
        );
    }

    return context;
};

export const Accordion = (props: AccordionProps) => {
    const [expandedItem, setInternalExpandedItem] = createSignal<string | null>(
        props.value ?? props.defaultValue ?? null,
    );

    createComputed(
        on(
            () => props.value,
            (value) => {
                const newVal = value ?? null;

                setInternalExpandedItem(newVal);
                props.onChange?.(newVal);
            },
            { defer: true },
        ),
    );

    const setExpandedItem = (value: string | null) => {
        if (props.value === undefined) setInternalExpandedItem(value);
        props.onChange?.(value);
    };

    return (
        <AccordionContext.Provider
            value={{
                expandedItem,
                setExpandedItem,
                disabled: () => props.disabled,
            }}
        >
            <div class={cn('flex flex-col', props.class)}>{props.children}</div>
        </AccordionContext.Provider>
    );
};

type AccordionItemProps = {
    value?: string;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

const AccordionItem = (props: AccordionItemProps) => {
    const ctx = useAccordionContext();

    const id = createUniqueId();

    const getId = () => props.value ?? id;

    const [isOpen, setIsOpen] = createSignal(false);

    createEffect(() => {
        if (ctx.expandedItem() === getId()) setIsOpen(true);
        else setIsOpen(false);
    });

    createEffect(() => {
        if (!isOpen() && ctx.expandedItem() === getId())
            ctx.setExpandedItem(null);
    });

    const onOpenChange = (open: boolean) => {
        if (open) ctx.setExpandedItem(getId());

        setIsOpen(open);
    };

    return (
        <Collapsible
            class={cn(
                '[&+[data-slot=collapsible]]:rounded-t-none [&:has(+[data-slot=collapsible])]:rounded-b-none',
                props.class,
            )}
            disabled={ctx.disabled() ?? props.disabled}
            onOpenChange={onOpenChange}
            open={isOpen()}
        >
            {props.children}
        </Collapsible>
    );
};

type AccordionTriggerProps = {
    class?: string;
    children: JSX.Element;
};

const AccordionTrigger = (props: AccordionTriggerProps) => {
    return (
        <Collapsible.Trigger class={props.class}>
            {props.children}
        </Collapsible.Trigger>
    );
};

type AccordionContentProps = {
    class?: string;
    children: JSX.Element;
};

const AccordionContent = (props: AccordionContentProps) => {
    return (
        <Collapsible.Content class={props.class}>
            {props.children}
        </Collapsible.Content>
    );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
