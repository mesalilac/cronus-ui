import {
    createMemo,
    type JSX,
    splitProps,
    type ValidComponent,
} from 'solid-js';

import { Polymorphic, type PolymorphicProps } from '~/polymorphic';
import { cn } from '~/utils';

export type ButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost' | 'link';

export type ButtonAppearance =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonStyle = Record<ButtonAppearance, Record<ButtonVariant, string>>;

export type ButtonProps = {
    variant?: ButtonVariant;
    appearance?: ButtonAppearance;
    size?: ButtonSize;
    disabled?: boolean;
    class?: string;
    children: JSX.Element;
};

export const Button = <T extends ValidComponent = 'button'>(
    props: PolymorphicProps<T, ButtonProps>,
) => {
    // const props = mergeProps(
    //     {
    //         appearance: 'secondary',
    //         variant: 'solid',
    //         size: 'md',
    //     } satisfies Partial<ButtonProps>,
    //     rawProps,
    // );

    const [local, others] = splitProps(props, [
        'class',
        'variant',
        'appearance',
        'size',
    ]);

    const baseStyles = cn(
        'flex cursor-pointer items-center gap-2 rounded-default font-medium text-sm text-text-primary leading-5 transition-colors duration-150 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-current/50 active:brightness-90 disabled:pointer-events-none disabled:opacity-60',
    );

    const buttonSize: Record<ButtonSize, string> = {
        sm: 'p-1',
        md: 'px-4 py-2',
        lg: 'px-6 py-2',
        icon: 'p-2',
    };

    const buttonAppearanceStyle: ButtonStyle = {
        primary: {
            solid: cn('bg-accent'),
            soft: cn('bg-accent/30'),
            outline: cn('bg-accent/10 text-accent outline outline-accent'),
            ghost: cn('text-accent hover:bg-accent/10'),
            link: cn('text-accent hover:underline'),
        },
        secondary: {
            solid: cn('bg-surface-3/80'),
            soft: cn('bg-surface-3/30'),
            outline: cn('bg-surface-3/10 outline outline-surface-3'),
            ghost: cn('hover:bg-surface-3/10'),
            link: cn('hover:underline'),
        },
        info: {
            solid: cn('bg-info/80'),
            soft: cn('bg-info/30 text-info'),
            outline: cn('bg-info/10 text-info outline outline-info'),
            ghost: cn('text-info hover:bg-info/10'),
            link: cn('text-info hover:underline'),
        },
        success: {
            solid: cn('bg-success/80'),
            soft: cn('bg-success/30 text-success'),
            outline: cn('bg-success/10 text-success outline outline-success'),
            ghost: cn('text-success hover:bg-success/10'),
            link: cn('text-success hover:underline'),
        },
        warning: {
            solid: cn('bg-warning/80'),
            soft: cn('bg-warning/30 text-warning'),
            outline: cn('bg-warning/10 text-warning outline outline-warning'),
            ghost: cn('text-warning hover:bg-warning/10'),
            link: cn('text-warning hover:underline'),
        },
        danger: {
            solid: cn('bg-danger/80'),
            soft: cn('bg-danger/30 text-danger'),
            outline: cn('bg-danger/10 text-danger outline outline-danger'),
            ghost: cn('text-danger hover:bg-danger/10'),
            link: cn('text-danger hover:underline'),
        },
    };

    const buttonStyle = createMemo(() =>
        cn(
            baseStyles,
            buttonAppearanceStyle[local.appearance ?? 'secondary'][
                local.variant ?? 'solid'
            ],
            buttonSize[local.size ?? 'md'],
            local.class,
        ),
    );

    return <Polymorphic as='button' class={buttonStyle()} {...others} />;
};
