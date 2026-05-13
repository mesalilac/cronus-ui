import {
    type Component,
    createSignal,
    Show,
    type VoidComponent,
} from 'solid-js';

import { IconEditCopy, IconInterfaceCheck } from '~/icons';
import { Button } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { Textarea } from '~/ui/Textarea';
import { cn } from '~/utils';

export type CopyFieldProps = {
    value?: string;
    multiline?: boolean;
    class?: string;
};

const CopyButton: VoidComponent<{
    value: string | undefined;
    multiline: boolean | undefined;
}> = (props) => {
    const [isCopied, setIsCopied] = createSignal(false);

    const handleCopy = () => {
        setIsCopied(true);

        // TODO: Copy

        setTimeout(() => {
            setIsCopied(false);
        }, 800);
    };

    return (
        <Button
            appearance={isCopied() ? 'success' : 'secondary'}
            onClick={handleCopy}
            variant={isCopied() ? 'soft' : 'solid'}
        >
            <Show
                fallback={
                    <>
                        <IconEditCopy />
                        <Show when={props.multiline}>Copy into clipboard</Show>
                    </>
                }
                when={isCopied()}
            >
                <IconInterfaceCheck />
                <Show when={props.multiline}>Copied!</Show>
            </Show>
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
