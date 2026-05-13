import {
    type Component,
    createSignal,
    Match,
    Show,
    Switch,
    type VoidComponent,
} from 'solid-js';

import { IconEditCopy, IconInterfaceCheck, IconMenuCloseMd } from '~/icons';
import { Button, type ButtonAppearance } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { Textarea } from '~/ui/Textarea';
import { cn } from '~/utils';

export type CopyFieldProps = {
    value?: string;
    multiline?: boolean;
    class?: string;
};

type CopyButtonState = 'normal' | 'copied' | 'failed';

const CopyButton: VoidComponent<{
    value: string | undefined;
    multiline: boolean | undefined;
}> = (props) => {
    const [copyState, setCopyState] = createSignal<CopyButtonState>('normal');

    const handleCopy = () => {
        navigator.clipboard
            .writeText(props.value ?? '')
            .catch(() => setCopyState('failed'));
        setCopyState('copied');

        setTimeout(() => {
            setCopyState('normal');
        }, 1000);
    };

    const buttonAppearance: Record<CopyButtonState, ButtonAppearance> = {
        normal: 'secondary',
        copied: 'success',
        failed: 'danger',
    };

    return (
        <Button
            appearance={buttonAppearance[copyState()]}
            onClick={handleCopy}
            variant={copyState() === 'normal' ? 'solid' : 'soft'}
        >
            <Switch>
                <Match when={copyState() === 'normal'}>
                    <IconEditCopy />
                    <Show when={props.multiline}>Copy into clipboard</Show>
                </Match>
                <Match when={copyState() === 'copied'}>
                    <IconInterfaceCheck />
                    <Show when={props.multiline}>Copied!</Show>
                </Match>
                <Match when={copyState() === 'failed'}>
                    <IconMenuCloseMd />
                    <Show when={props.multiline}>Failed to copy!</Show>
                </Match>
            </Switch>
        </Button>
    );
};

export const CopyField: Component<CopyFieldProps> = (props) => {
    return (
        <div
            class={cn('flex gap-1', props.multiline && 'flex-col', props.class)}
        >
            <Show
                fallback={<Input readOnly value={props.value ?? ''} />}
                when={props.multiline}
            >
                <Textarea readOnly value={props.value ?? ''} />
            </Show>
            <CopyButton multiline={props.multiline} value={props.value} />
        </div>
    );
};
