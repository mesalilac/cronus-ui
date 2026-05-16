import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSXElement,
    mergeProps,
    on,
    type ParentComponent,
    Show,
    useContext,
} from 'solid-js';

import type { PartialComponentProps } from '~/types';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

type TabsVariant = 'underline' | 'soft' | 'segmented';
type TabsOrientation = 'horizontal' | 'vertical';

export type TabsProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    orientation?: TabsOrientation;
    variant?: TabsVariant;
    disabled?: boolean;
    children: JSXElement;
};

export const TabsContext = createContext<{
    value: Accessor<string | undefined>;
    onChange: (value: string) => void;
    orientation: Accessor<TabsOrientation>;
    variant: Accessor<TabsVariant>;
    disabled: Accessor<boolean | undefined>;
}>();

export const useTabsContext = () => {
    const context = useContext(TabsContext);

    if (!context) {
        throw new Error(
            'useTabsContext must be used within the TabsContext provider',
        );
    }

    return context;
};

export const Tabs: TabsCompound = (rawProps) => {
    const props = mergeProps(
        {
            variant: 'underline',
            orientation: 'horizontal',
        } satisfies PartialComponentProps<typeof Tabs>,
        rawProps,
    );

    const [value, setValue] = createSignal<string | undefined>(
        props.value ?? props.defaultValue,
    );

    createComputed(
        on(
            () => props.value,
            (val) => {
                setValue(val);
            },
            { defer: true },
        ),
    );

    const onChange = (val: string) => {
        if (props.value === undefined) setValue(val);
        props.onChange?.(val);
    };

    return (
        <TabsContext.Provider
            value={{
                value,
                onChange,
                orientation: () => props.orientation,
                variant: () => props.variant,
                disabled: () => props.disabled,
            }}
        >
            <div>{props.children}</div>
        </TabsContext.Provider>
    );
};

const Tab: ParentComponent<{
    class?: string;
    value: string;
    disabled?: boolean;
}> = (props) => {
    const ctx = useTabsContext();

    const isDisabled = () => ctx.disabled() || props.disabled;

    return (
        <Button
            class={cn('capitalize', props.class)}
            disabled={isDisabled()}
            onClick={() => ctx.onChange(props.value)}
        >
            {props.children ?? props.value}
        </Button>
    );
};

const List: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

const Panel: ParentComponent<{ class?: string; value: string }> = (props) => {
    const ctx = useTabsContext();

    return (
        <Show when={props.value === ctx.value()}>
            <div>{props.children}</div>
        </Show>
    );
};

type TabsCompound = {
    (props: TabsProps): JSXElement;
    Tab: typeof Tab;
    List: typeof List;
    Panel: typeof Panel;
};

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Panel = Panel;
