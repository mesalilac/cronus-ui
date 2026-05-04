/* @refresh reload */

// Source: <https://github.com/kobaltedev/kobalte/blob/abd56134f40075258ad7f002502a20398fc3fc69/packages/core/src/polymorphic/polymorphic.tsx>

import {
    type ComponentProps,
    type JSX,
    mergeProps,
    splitProps,
    type ValidComponent,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
// biome-ignore lint/complexity/noBannedTypes: Ignore
export type OverrideProps<Source = {}, Override = {}> = Omit<
    Source,
    keyof Override
> &
    Override;

/**
 * Allows for extending a set of `ComponentProps` by an overriding set of props,
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideComponentProps<T extends ValidComponent, P> = OverrideProps<
    ComponentProps<T>,
    P
>;

export function mergeDefaultProps<T extends {}, D extends Partial<T>>(
    defaultProps: D,
    props: T,
): OverrideProps<T, D> {
    return mergeProps(defaultProps, props) as OverrideProps<T, D>;
}

/* -------------------------------------------------------------------------------------------------
 * Polymorphic
 * -----------------------------------------------------------------------------------------------*/

export type ElementOf<T> = T extends HTMLElement
    ? T
    : T extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[T]
      : // biome-ignore lint/suspicious/noExplicitAny: Ignore
        any;

/**
 * Polymorphic attribute.
 */
export interface PolymorphicAttributes<T extends ValidComponent> {
    as?: T | keyof JSX.HTMLElementTags;
}

/**
 * Props used by a polymorphic component.
 */
export type PolymorphicProps<
    T extends ValidComponent,
    // biome-ignore lint/complexity/noBannedTypes: Ignore
    Props extends {} = {},
> = OverrideProps<
    ComponentProps<T>, // Override props from custom/tag component with our own
    Props & // Accept custom props of our own component
        PolymorphicAttributes<T>
>;

/**
 * Helper type to get the exact props in Polymnorphic `as` callback.
 */
export type PolymorphicCallbackProps<
    CustomProps extends {},
    Options extends {},
    RenderProps extends {},
> = Omit<CustomProps, keyof Options | keyof RenderProps> & RenderProps;

/**
 * A utility component that render its `as` prop.
 */
export function Polymorphic<RenderProps>(
    props: RenderProps & PolymorphicAttributes<ValidComponent>,
): JSX.Element {
    const [local, others] = splitProps(props, ['as']);

    if (!local.as) {
        throw new Error(
            '[Cronus-ui]: Polymorphic is missing the required `as` prop.',
        );
    }

    return (
        // biome-ignore lint/suspicious/noTsIgnore: Ignore
        // @ts-ignore: Props are valid but not worth calculating
        <Dynamic {...others} component={local.as} />
    );
}
