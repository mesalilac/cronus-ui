import {
    type Component,
    createEffect,
    createSignal,
    mergeProps,
    Show,
} from 'solid-js';

import { IconEditPencilLine01, IconMenuCloseMd, IconSystemSave } from '~/icons';
import { Button } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { cn } from '~/utils';

export type EditableTextProps = {
    value: string;
    onSave: (value: string) => void;
    class?: string;
    showEditIcon?: boolean;
};

export const EditableText: Component<EditableTextProps> = (rawProps) => {
    const props = mergeProps(
        { showEditIcon: true } satisfies Partial<EditableTextProps>,
        rawProps,
    );

    let inputRef!: HTMLInputElement;

    const [isEditing, setIsEditing] = createSignal(false);
    const [internalInput, setInternalInput] = createSignal(props.value);

    createEffect(() => {
        const value = props.value;
        setInternalInput(value);
    });

    const handleSave = () => {
        props.onSave(internalInput());
        setIsEditing(false);
    };

    const handleCancel = () => {
        setInternalInput(props.value);
        setIsEditing(false);
    };

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') handleCancel();
    };

    createEffect(() => {
        if (isEditing()) inputRef.focus();
    });

    return (
        <div class={cn('flex flex-row items-center gap-1', props.class)}>
            <Show
                fallback={
                    <>
                        <span
                            data-slot='label'
                            onDblClick={() => setIsEditing(true)}
                            role='none'
                        >
                            {props.value}
                        </span>
                        <Show when={props.showEditIcon}>
                            <IconEditPencilLine01
                                class='size-4 cursor-pointer text-text-muted hover:text-text-primary'
                                data-slot='edit-icon'
                                onClick={() => setIsEditing(true)}
                            />
                        </Show>
                    </>
                }
                when={isEditing()}
            >
                <Input
                    data-slot='input'
                    onInput={setInternalInput}
                    onKeyDown={handleKeydown}
                    ref={inputRef}
                    value={internalInput()}
                >
                    <Button
                        data-slot='save'
                        onClick={handleSave}
                        variant='icon'
                    >
                        <IconSystemSave />
                    </Button>
                    <Button
                        data-slot='cancel'
                        onClick={handleCancel}
                        variant='icon'
                    >
                        <IconMenuCloseMd />
                    </Button>
                </Input>
            </Show>
        </div>
    );
};
