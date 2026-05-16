import {
    type Accessor,
    createContext,
    type JSXElement,
    mergeProps,
    type ParentComponent,
    useContext,
} from 'solid-js';

import type { PartialComponentProps } from '~/types';
import { Button } from '~/ui/Button';

type TabsVariant = 'underline' | 'soft' | 'segmented';

export type TabsProps = {
    variant?: TabsVariant;
    children: JSXElement;
};

export const TabsContext = createContext<{
    variant: Accessor<TabsVariant>;
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
        { variant: 'underline' } satisfies PartialComponentProps<typeof Tabs>,
        rawProps,
    );

    return (
        <TabsContext.Provider
            value={{
                variant: () => props.variant,
            }}
        >
            <div>{props.children}</div>
        </TabsContext.Provider>
    );
};

const Tab: ParentComponent = (props) => {
    return <Button>{props.children}</Button>;
};

const List: ParentComponent = (props) => {
    return <div>{props.children}</div>;
};

const Panel: ParentComponent = (props) => {
    return <div>{props.children}</div>;
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
