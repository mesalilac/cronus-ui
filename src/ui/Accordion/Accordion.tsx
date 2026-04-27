import {
    type Accessor,
    createContext,
    createEffect,
    createSignal,
    createUniqueId,
    type JSX,
    useContext,
} from 'solid-js';

import { Collapsible } from '~/ui/Collapsible';
import { cn } from '~/utils';

export type AccordionProps = {
    defaultValue?: string[];
    multiple?: boolean;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const AccordionContext = createContext<{
    expandedItem: Accessor<string[]>;
    setExpandedItem: (value: string[]) => void;
    multiple: Accessor<boolean | undefined>;
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
    const [expandedItem, setExpandedItem] = createSignal<string[]>(
        props.defaultValue ?? [],
    );

    return (
        <AccordionContext.Provider
            value={{
                expandedItem,
                setExpandedItem,
                multiple: () => props.multiple,
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

    const isExpanded = () => ctx.expandedItem().includes(getId());

    const [isOpen, setIsOpen] = createSignal(false);

    createEffect(() => {
        if (isExpanded()) setIsOpen(true);
        else setIsOpen(false);
    });

    createEffect(() => {
        if (!isOpen() && isExpanded()) {
            const list = ctx.expandedItem();

            ctx.setExpandedItem(list.filter((id) => id !== getId()));
        }
    });

    const onOpenChange = (open: boolean) => {
        if (open) {
            const list = ctx.expandedItem();

            ctx.setExpandedItem(
                isExpanded()
                    ? list.filter((id) => id !== getId())
                    : ctx.multiple()
                      ? [...list, getId()]
                      : [getId()],
            );
        }

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
