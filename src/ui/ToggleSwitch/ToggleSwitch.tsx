import {
    type Accessor,
    createContext,
    type JSXElement,
    type ParentComponent,
    useContext,
} from 'solid-js';

import { cn } from '~/utils';

export const ToggleSwitchContext = createContext<{
    checked: Accessor<boolean | undefined>;
    onChange: (value: boolean) => void;
    handleToggle: () => void;
    disabled: Accessor<boolean | undefined>;
}>();

export const useToggleSwitchContext = () => {
    const context = useContext(ToggleSwitchContext);

    if (!context) {
        throw new Error(
            'useToggleSwitchContext must be used within the ToggleSwitchContext provider',
        );
    }

    return context;
};

export type ToggleSwitchProps = {
    checked?: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    class?: string;
    children?: JSXElement;
};

export const ToggleSwitch: ToggleSwitchCompound = (props) => {
    const handleToggle = () => {
        props.onChange(!props.checked);
    };

    return (
        <ToggleSwitchContext.Provider
            value={{
                checked: () => props.checked,
                onChange: props.onChange,
                disabled: () => props.disabled,
                handleToggle,
            }}
        >
            <div
                class={cn(
                    'flex select-none gap-2 inert:opacity-50',
                    props.class,
                )}
                data-checked={props.checked}
                inert={props.disabled}
                onClick={handleToggle}
                role='none'
            >
                {props.children}
            </div>
        </ToggleSwitchContext.Provider>
    );
};

const ToggleSwitchControl: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useToggleSwitchContext();

    return (
        <div
            aria-checked={ctx.checked()}
            aria-disabled={ctx.disabled()}
            class={cn(
                'flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-border bg-surface-3/30 p-0.5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent data-[checked=true]:border-accent data-[checked=true]:bg-accent',
                props.class,
            )}
            data-checked={ctx.checked()}
            data-slot='track'
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    ctx.handleToggle();
                }
            }}
            role='switch'
            tabIndex={0}
        >
            <div
                class={cn(
                    'h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-out data-[checked=true]:translate-x-4',
                )}
                data-checked={ctx.checked()}
                data-slot='thumb'
            />
        </div>
    );
};

type ToggleSwitchCompound = {
    (props: ToggleSwitchProps): JSXElement;
    Control: typeof ToggleSwitchControl;
};

ToggleSwitch.Control = ToggleSwitchControl;
