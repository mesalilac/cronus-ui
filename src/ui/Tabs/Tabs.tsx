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
import {
    Button,
    type ButtonAppearance,
    type ButtonSize,
    type ButtonVariant,
} from '~/ui/Button';
import { cn } from '~/utils';

type TabsVariant = 'underline' | 'soft' | 'subtle';
type TabsOrientation = 'horizontal' | 'vertical';

export type TabsProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    orientation?: TabsOrientation;
    variant?: TabsVariant;
    disabled?: boolean;
    class?: string;
    children: JSXElement;
};

export const TabsContext = createContext<{
    value: Accessor<string | undefined>;
    onChange: (value: string) => void;
    orientation: Accessor<TabsOrientation>;
    variant: Accessor<TabsVariant>;
    disabled: Accessor<boolean | undefined>;

    isSelected: (val: string) => boolean;
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

    const isSelected = (val: string) => value() === val;

    return (
        <TabsContext.Provider
            value={{
                value,
                onChange,
                orientation: () => props.orientation,
                variant: () => props.variant,
                disabled: () => props.disabled,
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

const Tab: ParentComponent<{
    class?: string;
    value: string;
    size?: ButtonSize;
    disabled?: boolean;
}> = (props) => {
    const ctx = useTabsContext();

    const isSelected = () => ctx.isSelected(props.value);
    const isDisabled = () => ctx.disabled() || props.disabled;

    const buttonVariant: Record<TabsVariant, ButtonVariant> = {
        underline: 'transparent',
        soft: 'soft',
        subtle: 'soft',
    };

    const buttonAppearance: Record<TabsVariant, ButtonAppearance> = {
        underline: isSelected() ? 'primary' : 'secondary',
        soft: isSelected() ? 'primary' : 'secondary',
        subtle: 'secondary',
    };

    return (
        <Button
            appearance={buttonAppearance[ctx.variant()]}
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
            size={props.size}
            variant={
                isSelected() ? buttonVariant[ctx.variant()] : 'transparent'
            }
        >
            {props.children ?? props.value}
        </Button>
    );
};

const List: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useTabsContext();

    return (
        <div
            class={cn(
                'flex flex-wrap',

                // vertical
                'data-[orientation=vertical]:flex-col',
                'data-[orientation=vertical]:bg-surface-base/60',
                'data-[orientation=vertical]:p-2',
                'data-[orientation=vertical]:rounded-default',
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

const Panel: ParentComponent<{ class?: string; value: string }> = (props) => {
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

type TabsCompound = {
    (props: TabsProps): JSXElement;
    Tab: typeof Tab;
    List: typeof List;
    Panel: typeof Panel;
};

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Panel = Panel;
