import {
    type Accessor,
    type Component,
    createSignal,
    type JSXElement,
    Match,
    mergeProps,
    Show,
    Switch,
} from 'solid-js';

import { IconEditCopy, IconInterfaceCheck, IconMenuCloseMd } from '~/icons';
import type { PartialComponentProps } from '~/types';
import { Button, type ButtonAppearance, type ButtonProps } from '~/ui/Button';

type CopyButtonState = 'normal' | 'copied' | 'failed';

export type CopyButtonProps = {
    value?: string;
    compact?: boolean;
    delayMs?: number;
    variant?: (state: Accessor<CopyButtonState>) => ButtonProps['variant'];
    appearance?: (
        state: Accessor<CopyButtonState>,
    ) => ButtonProps['appearance'];
    size?: (state: Accessor<CopyButtonState>) => ButtonProps['size'];
    disabled?: boolean;
    class?: string;
    children?: (state: Accessor<CopyButtonState>) => JSXElement;
};

const copyButtonAppearance: Record<CopyButtonState, ButtonAppearance> = {
    normal: 'secondary',
    copied: 'success',
    failed: 'danger',
};

export const CopyButton: Component<CopyButtonProps> = (rawProps) => {
    const props = mergeProps(
        {
            compact: true,
        } satisfies PartialComponentProps<typeof CopyButton>,
        rawProps,
    );

    const [copyState, setCopyState] = createSignal<CopyButtonState>('normal');

    const handleCopy = () => {
        navigator.clipboard
            .writeText(props.value ?? '')
            .catch(() => setCopyState('failed'));
        setCopyState('copied');

        setTimeout(() => {
            setCopyState('normal');
        }, props.delayMs ?? 1000);
    };

    return (
        <Button
            appearance={
                props.appearance?.(copyState) ??
                copyButtonAppearance[copyState()]
            }
            class={props.class}
            disabled={props.disabled}
            onClick={handleCopy}
            size={props.size?.(copyState)}
            variant={
                (props.variant?.(copyState) ?? copyState() === 'normal')
                    ? 'solid'
                    : 'soft'
            }
        >
            <Switch>
                <Match when={props.children !== undefined}>
                    {props.children?.(copyState)}
                </Match>
                <Match when={copyState() === 'normal'}>
                    <IconEditCopy />
                    <Show when={!props.compact}>Copy into clipboard</Show>
                </Match>
                <Match when={copyState() === 'copied'}>
                    <IconInterfaceCheck />
                    <Show when={!props.compact}>Copied!</Show>
                </Match>
                <Match when={copyState() === 'failed'}>
                    <IconMenuCloseMd />
                    <Show when={!props.compact}>Failed to copy!</Show>
                </Match>
            </Switch>
        </Button>
    );
};
