import {
    type Accessor,
    createContext,
    createEffect,
    createSignal,
    createUniqueId,
    type JSX,
    type Setter,
    useContext,
} from 'solid-js';

import { Collapsible } from '~/ui/Collapsible';
import { cn } from '~/utils';

export type AccordionProps = {
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const AccordionContext = createContext<{
    activeCollapsible: Accessor<string | null>;
    setActiveCollapsible: Setter<string | null>;
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
    const [activeCollapsible, setActiveCollapsible] = createSignal<
        string | null
    >(null);

    return (
        <AccordionContext.Provider
            value={{
                activeCollapsible,
                setActiveCollapsible,
                disabled: () => props.disabled,
            }}
        >
            <div class={cn('flex flex-col', props.class)}>{props.children}</div>
        </AccordionContext.Provider>
    );
};

type AccordionItemProps = {
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

const AccordionItem = (props: AccordionItemProps) => {
    const ctx = useAccordionContext();

    const id = createUniqueId();

    const [isOpen, setIsOpen] = createSignal(false);

    createEffect(() => {
        if (ctx.activeCollapsible() !== id && isOpen()) setIsOpen(false);
    });

    const onOpenChange = (open: boolean) => {
        if (open) ctx.setActiveCollapsible(id);

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
