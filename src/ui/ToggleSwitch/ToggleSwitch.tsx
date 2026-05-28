import { cn } from '~/utils';

export type ToggleSwitchProps = {
    checked?: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    class?: string;
    trackClass?: string;
    thumbClass?: string;
};

export const ToggleSwitch = (props: ToggleSwitchProps) => {
    const handleToggle = () => {
        if (props.disabled) return;

        props.onChange(!props.checked);
    };

    return (
        <div
            aria-checked={props.checked}
            aria-disabled={props.disabled}
            class={cn(
                'flex h-5 w-9 cursor-pointer items-center rounded-full border border-border bg-surface-3/30 p-0.5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent',
                props.checked && 'border-accent bg-accent',
                props.disabled && 'cursor-auto opacity-60',
                props.trackClass,
                props.class,
            )}
            onClick={handleToggle}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleToggle();
                }
            }}
            role='switch'
            tabIndex={0}
        >
            <div
                class={cn(
                    'h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-out',
                    props.checked && 'translate-x-4',
                    props.thumbClass,
                )}
            />
        </div>
    );
};
