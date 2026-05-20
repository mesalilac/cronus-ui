import {
    type Accessor,
    createComputed,
    createContext,
    createSignal,
    type JSXElement,
    mergeProps,
    on,
    Show,
    useContext,
} from 'solid-js';

import type { PartialComponentProps } from '~/types';
import {
    Button,
    type ButtonAppearance,
    type ButtonSize,
    type ButtonVariant,
} from '~/ui/Button';
import { cn } from '~/utils';

type TabsVariant = 'underline' | 'soft' | 'subtle';
type TabsOrientation = 'horizontal' | 'vertical';

type RootProps<T extends string> = {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    orientation?: TabsOrientation;
    variant?: TabsVariant;
    size?: ButtonSize;
    disabled?: boolean;
    class?: string;
    children: JSXElement;
};

type TabsContextValue = {
    value: Accessor<string | undefined>;
    onChange: (value: string) => void;
    orientation: Accessor<TabsOrientation>;
    variant: Accessor<TabsVariant>;
    disabled: Accessor<boolean | undefined>;
    size: Accessor<ButtonSize | undefined>;

    isSelected: (val: string) => boolean;
};

const TabsContext = createContext<TabsContextValue>();

const useTabsContext = () => {
    const context = useContext(TabsContext);

    if (!context) {
        throw new Error(
            'useTabsContext must be used within the TabsContext provider',
        );
    }

    return context;
};

const Root = <T extends string>(rawProps: RootProps<T>) => {
    const props = mergeProps(
        {
            variant: 'underline',
            orientation: 'horizontal',
        } satisfies PartialComponentProps<typeof Root>,
        rawProps,
    );

    const [value, setValue] = createSignal<T | undefined>(
        props.value ?? props.defaultValue,
    );

    createComputed(
        on(
            () => props.value,
            (val) => {
                setValue(() => val);
            },
            { defer: true },
        ),
    );

    const onChange = (val: string) => {
        if (props.value === undefined) setValue(() => val as T);
        props.onChange?.(val as T);
    };

    const isSelected = (val: string) => value() === val;

    return (
        <TabsContext.Provider
            value={{
                value,
                onChange,
                orientation: () => props.orientation,
                variant: () => props.variant,
                disabled: () => props.disabled,
                size: () => props.size,
                isSelected,
            }}
        >
            <div class='@container/tabs h-full w-full'>
                <div
                    class={cn(
                        'flex h-full w-full flex-col flex-wrap gap-1',
                        'data-[orientation=vertical]:flex-row',
                        'data-[orientation=vertical]:@max-sm/tabs:flex-col',
                        props.class,
                    )}
                    data-orientation={props.orientation}
                >
                    {props.children}
                </div>
            </div>
        </TabsContext.Provider>
    );
};

type TabProps<T extends string> = {
    class?: string;
    value: T;
    size?: ButtonSize;
    disabled?: boolean;
    children?: JSXElement;
};

const Tab = <T extends string>(props: TabProps<T>) => {
    const ctx = useTabsContext();

    const isSelected = () => ctx.isSelected(props.value);
    const isDisabled = () => ctx.disabled() || props.disabled;

    const getButtonVariant = (): Extract<
        ButtonVariant,
        'transparent' | 'soft'
    > => {
        if (!isSelected()) return 'transparent';

        switch (ctx.variant()) {
            case 'underline':
                return 'transparent';
            case 'soft':
            case 'subtle':
                return 'soft';
        }
    };

    const getButtonAppearance = (): ButtonAppearance => {
        switch (ctx.variant()) {
            case 'subtle':
                return 'secondary';
            case 'underline':
            case 'soft':
                return isSelected() ? 'primary' : 'secondary';
        }
    };

    return (
        <Button
            appearance={getButtonAppearance()}
            class={cn(
                'text-text-muted capitalize hover:text-text-secondary',

                // underline
                'data-[variant=underline]:rounded-none',
                'data-[variant=underline]:border-transparent',
                'data-[variant=underline]:border-b-2',
                'data-[variant=underline]:data-[selected=true]:border-current',
                'data-[variant=underline]:data-[selected=true]:text-accent',

                // soft
                'data-[variant=soft]:data-[selected=true]:text-accent',

                // subtle
                'data-[variant=subtle]:data-[selected=true]:text-text-secondary',
                'data-[variant=subtle]:data-[selected=true]:outline-text-secondary',

                props.class,
            )}
            data-orientation={ctx.orientation()}
            data-selected={isSelected()}
            data-slot='tab'
            data-variant={ctx.variant()}
            disabled={isDisabled()}
            onClick={() => ctx.onChange(props.value)}
            size={ctx.size() ?? props.size}
            variant={getButtonVariant()}
        >
            {props.children ?? props.value}
        </Button>
    );
};

type ListProps = {
    class?: string;
    children?: JSXElement;
};

const List = (props: ListProps) => {
    const ctx = useTabsContext();

    return (
        <div
            class={cn(
                'flex flex-wrap rounded-default bg-surface-base/60 p-2',

                // vertical
                'data-[orientation=vertical]:flex-col',
                'data-[orientation=vertical]:basis-44',
                'data-[orientation=vertical]:shrink-0',

                // container queries
                'data-[orientation=vertical]:@max-sm/tabs:flex-row',
                'data-[orientation=vertical]:@max-sm/tabs:basis-auto',
                'data-[orientation=vertical]:@max-sm/tabs:p-0',
                'data-[orientation=vertical]:@max-sm/tabs:bg-transparent',

                props.class,
            )}
            data-orientation={ctx.orientation()}
            data-slot='list'
        >
            {props.children}
        </div>
    );
};

type PanelProps<T extends string> = {
    value: T;
    class?: string;
    children?: JSXElement;
};

const Panel = <T extends string>(props: PanelProps<T>) => {
    const ctx = useTabsContext();

    const isSelected = () => ctx.isSelected(props.value);

    return (
        <Show when={isSelected()}>
            <div
                class={cn('grow p-2', props.class)}
                data-orientation={ctx.orientation()}
                data-selected={isSelected()}
                data-slot='panel'
            >
                {props.children}
            </div>
        </Show>
    );
};

type TabsCompound<T extends string> = {
    Root: (props: RootProps<T>) => JSXElement;
    Tab: (props: TabProps<T>) => JSXElement;
    List: (props: ListProps) => JSXElement;
    Panel: (props: PanelProps<T>) => JSXElement;
};

// biome-ignore-start lint/style/useNamingConvention: Component
export const createTabs = <T extends string>(): TabsCompound<T> => ({
    Root,
    Tab,
    List,
    Panel,
});
// biome-ignore-end lint/style/useNamingConvention: Component
