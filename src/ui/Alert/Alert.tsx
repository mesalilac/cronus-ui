import {
    createContext,
    createSignal,
    type JSX,
    Match,
    mergeProps,
    Show,
    Switch,
    useContext,
} from 'solid-js';

import {
    IconInterfaceCheck,
    IconMenuCloseMd,
    IconWarningCircleWarning,
    IconWarningInfo,
} from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

export type AlertVariant =
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';

const AlertContext = createContext<{
    variant: AlertVariant;
    dismiss: () => void;
}>();

const useAlertContext = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error(
            'useContext must be used within the correct context provider',
        );
    }

    return context;
};

export type AlertProps = {
    variant?: AlertVariant;
    title: string;
    description: string;
    class?: string;
    children?: JSX.Element;
};

export const Alert = (rawProps: AlertProps) => {
    const props = mergeProps(
        { variant: 'default' } satisfies Partial<AlertProps>,
        rawProps,
    );
    const [show, setShow] = createSignal(true);

    const variantStyles: Record<AlertVariant, string> = {
        default: cn('bg-surface-3/20 text-text-muted'),
        success: cn('bg-success/20 text-text-success'),
        warning: cn('bg-warning/20 text-text-warning'),
        danger: cn('bg-danger/20 text-text-danger'),
        info: cn('bg-info/20 text-text-info'),
    };

    const dismiss = () => setShow(false);

    return (
        <Show when={show()}>
            <AlertContext.Provider value={{ variant: props.variant, dismiss }}>
                <div
                    class={cn(
                        'flex w-64 flex-row gap-4 rounded-default border-current border-l-4 p-4',
                        variantStyles[props.variant],
                        props.class,
                    )}
                >
                    <Switch>
                        <Match when={props.variant === 'default'}>
                            <IconWarningInfo class='size-6' />
                        </Match>
                        <Match when={props.variant === 'success'}>
                            <IconInterfaceCheck class='size-6' />
                        </Match>
                        <Match when={props.variant === 'warning'}>
                            <IconWarningCircleWarning class='size-6' />
                        </Match>
                        <Match when={props.variant === 'danger'}>
                            <IconWarningCircleWarning class='size-6' />
                        </Match>
                        <Match when={props.variant === 'info'}>
                            <IconWarningInfo class='size-6' />
                        </Match>
                    </Switch>
                    <div class='flex w-full flex-col gap-2'>
                        <h1 class='font-medium'>{props.title}</h1>
                        <p>{props.description}</p>
                        <Show when={props.children}>
                            <div class='mt-2 flex flex-row items-center gap-2'>
                                {props.children}
                            </div>
                        </Show>
                    </div>
                    <IconMenuCloseMd
                        class='size-6 cursor-pointer'
                        onClick={dismiss}
                    />
                </div>
            </AlertContext.Provider>
        </Show>
    );
};

export type AlertActionProps = {
    onClick?: (dismiss: () => void) => void;
    class?: string;
    children: JSX.Element;
};

Alert.Action = (props: AlertActionProps) => {
    const ctx = useAlertContext();

    return (
        <Button
            class={cn(
                'border-current text-current hover:bg-current/10 active:bg-current/20',
                props.class,
            )}
            onClick={() => props.onClick?.(ctx.dismiss)}
            variant='outline'
        >
            {props.children}
        </Button>
    );
};
