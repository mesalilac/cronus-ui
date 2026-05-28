import {
    type Accessor,
    createContext,
    type JSXElement,
    type ParentComponent,
    useContext,
} from 'solid-js';

import { IconInterfaceCheck } from '~/icons';
import { cn } from '~/utils';

export const CheckboxContext = createContext<{
    checked: Accessor<boolean | undefined>;
    onChange: (value: boolean) => void;
    handleToggle: () => void;
    disabled: Accessor<boolean | undefined>;
}>();

export const useCheckboxContext = () => {
    const context = useContext(CheckboxContext);

    if (!context) {
        throw new Error(
            'useCheckboxContext must be used within the CheckboxContext provider',
        );
    }

    return context;
};

export type CheckboxProps = {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    class?: string;
    children?: JSXElement;
};

export const Checkbox: CheckboxCompound = (props) => {
    const handleToggle = () => {
        props.onChange(!props.checked);
    };

    return (
        <CheckboxContext.Provider
            value={{
                checked: () => props.checked,
                onChange: props.onChange,
                disabled: () => props.disabled,
                handleToggle,
            }}
        >
            <div
                class={cn(
                    'flex select-none items-center gap-2 inert:opacity-50',
                    props.class,
                )}
                data-checked={props.checked}
                inert={props.disabled}
                onClick={() => props.onChange(!props.checked)}
                role='none'
            >
                {props.children}
            </div>
        </CheckboxContext.Provider>
    );
};

const CheckboxControl: ParentComponent<{ class?: string }> = (props) => {
    const ctx = useCheckboxContext();

    return (
        <div
            aria-checked={ctx.checked()}
            aria-disabled={ctx.disabled()}
            class={cn(
                'flex size-4 shrink-0 cursor-pointer items-center rounded-sm border border-border transition-colors duration-200 ease-out data-[checked=true]:border-accent data-[checked=true]:bg-accent',
                props.class,
            )}
            data-checked={ctx.checked()}
            data-slot='container'
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    ctx.handleToggle();
                }
            }}
            role='switch'
            tabIndex={0}
        >
            <IconInterfaceCheck
                class={
                    'invisible size-4 text-white transition-opacity duration-100 ease-in-out data-[checked=true]:visible'
                }
                data-checked={ctx.checked()}
                data-slot='icon'
            />
        </div>
    );
};

type CheckboxCompound = {
    (props: CheckboxProps): JSXElement;
    Control: typeof CheckboxControl;
};

Checkbox.Control = CheckboxControl;
