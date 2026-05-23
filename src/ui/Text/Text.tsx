import {
    type JSXElement,
    mergeProps,
    splitProps,
    type ValidComponent,
} from 'solid-js';

import { Polymorphic, type PolymorphicProps } from '~/polymorphic';
import { cn } from '~/utils';

export type TextVariant =
    | 'default'
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

const TEXT_VARIANT_STYLES: Record<TextVariant, string> = {
    default: '',
    accent: cn('text-accent'),
    primary: cn('text-text-primary'),
    secondary: cn('text-text-secondary'),
    muted: cn('text-text-muted'),
    info: cn('text-info'),
    success: cn('text-text-success'),
    warning: cn('text-text-warning'),
    danger: cn('text-text-danger'),
};

export type TextProps = {
    variant?: TextVariant;
    class?: string;
    children?: JSXElement;
};

export const Text = <T extends ValidComponent = 'span'>(
    rawProps: PolymorphicProps<T, TextProps>,
) => {
    const props = mergeProps(
        {
            variant: 'default',
        } satisfies Partial<TextProps>,
        rawProps,
    );

    const [local, others] = splitProps(props, ['variant', 'class']);

    return (
        <Polymorphic
            as='span'
            class={cn(TEXT_VARIANT_STYLES[local.variant], local.class)}
            {...others}
        />
    );
};
