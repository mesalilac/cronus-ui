import {
    type JSX,
    Match,
    mergeProps,
    type ParentComponent,
    Show,
    Switch,
    splitProps,
} from 'solid-js';

import { Badge } from '~/ui/Badge';
import { cn } from '~/utils';

export type ButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost' | 'link';

export type ButtonAppearance =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonStyle = Record<ButtonAppearance, Record<ButtonVariant, string>>;

export interface ButtonProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    appearance?: ButtonAppearance;
    size?: ButtonSize;
    label?: JSX.Element;
    loading?: boolean;
    children: JSX.Element;
}

export const Button: ParentComponent<ButtonProps> = (rawProps) => {
    const props = mergeProps(
        {
            appearance: 'secondary',
            variant: 'solid',
        } satisfies Partial<ButtonProps>,
        rawProps,
    );

    const [local, others] = splitProps(props, [
        'class',
        'disabled',
        'variant',
        'appearance',
        'label',
        'loading',
    ]);

    const baseStyles = cn(
        'flex cursor-pointer items-center gap-2 rounded-default px-4 py-2 font-medium text-sm text-text-primary leading-5 transition-colors duration-150 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-current/50 active:brightness-90 disabled:pointer-events-none disabled:opacity-60',
    );

    const buttonStyle: ButtonStyle = {
        primary: {
            solid: cn('bg-accent'),
            soft: cn('bg-accent/30'),
            outline: cn('text-accent outline outline-accent'),
            ghost: cn('text-accent'),
            link: cn('text-accent hover:underline'),
        },
        secondary: {
            solid: cn('bg-surface-3/80'),
            soft: cn('bg-surface-3/30'),
            outline: cn('outline outline-surface-3'),
            ghost: cn(''),
            link: cn('hover:underline'),
        },
        success: {
            solid: cn('bg-success/80'),
            soft: cn('bg-success/30 text-success'),
            outline: cn('text-success outline outline-success'),
            ghost: cn('text-success'),
            link: cn('text-success hover:underline'),
        },
        warning: {
            solid: cn('bg-warning/80'),
            soft: cn('bg-warning/30 text-warning'),
            outline: cn('text-warning outline outline-warning'),
            ghost: cn('text-warning'),
            link: cn('text-warning hover:underline'),
        },
        danger: {
            solid: cn('bg-danger/80'),
            soft: cn('bg-danger/30 text-danger'),
            outline: cn('text-danger outline outline-danger'),
            ghost: cn('text-danger outline-none'),
            link: cn('text-danger hover:underline'),
        },
    };

    return (
        <Switch>
            <Match when={local.loading}>
                <button
                    class={cn(
                        baseStyles,
                        buttonStyle[local.appearance][local.variant],
                        local.class,
                    )}
                    disabled
                    {...others}
                    type='button'
                >
                    <svg
                        aria-hidden='true'
                        class='size-4 animate-spin text-white'
                        fill='none'
                        viewBox='0 0 100 101'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='#E5E7EB80'
                        />
                        <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentColor'
                        />
                    </svg>
                    Loading...
                </button>
            </Match>

            <Match when={!local.loading}>
                <button
                    class={cn(
                        baseStyles,
                        buttonStyle[local.appearance][local.variant],
                        local.class,
                    )}
                    disabled={local.disabled}
                    type='button'
                    {...others}
                >
                    {props.children}
                    <Show when={local.label}>
                        <Badge>{local.label}</Badge>
                    </Show>
                </button>
            </Match>
        </Switch>
    );
};
