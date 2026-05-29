import {
    type Accessor,
    type Component,
    createSignal,
    type JSXElement,
    Match,
    Switch,
} from 'solid-js';

import { IconEditCopy, IconInterfaceCheck, IconMenuCloseMd } from '~/icons';
import { Button, type ButtonAppearance, type ButtonProps } from '~/ui/Button';

type CopyButtonState = 'normal' | 'copied' | 'failed';

export type CopyButtonProps = {
    value?: string;
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

export const CopyButton: Component<CopyButtonProps> = (props) => {
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
            title='Copy into clipboard'
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
                </Match>
                <Match when={copyState() === 'copied'}>
                    <IconInterfaceCheck />
                </Match>
                <Match when={copyState() === 'failed'}>
                    <IconMenuCloseMd />
                </Match>
            </Switch>
        </Button>
    );
};
