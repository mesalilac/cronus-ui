import { createSignal, For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { InlineEditor } from './InlineEditor';

type StoryComponent = typeof InlineEditor;

const meta = {
    title: 'Ui/InlineEditor',
    component: InlineEditor,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        const [label, setLabel] = createSignal<string>('test label');

        return (
            <InlineEditor onSave={setLabel} value={label()}>
                <InlineEditor.Display>
                    {(setOpen) => (
                        <span onDblClick={() => setOpen(true)} role='none'>
                            {label()}
                        </span>
                    )}
                </InlineEditor.Display>
                <InlineEditor.Input />
                <InlineEditor.Save />
                <InlineEditor.Cancel />
                <InlineEditor.Reset />
            </InlineEditor>
        );
    },
};

export const Compact: Story = {
    render: () => {
        const [label, setLabel] = createSignal<string>('test label');

        return (
            <InlineEditor onSave={setLabel} value={label()}>
                <InlineEditor.Display>
                    {(setOpen) => (
                        <span onDblClick={() => setOpen(true)} role='none'>
                            {label()}
                        </span>
                    )}
                </InlineEditor.Display>
                <InlineEditor.Input />
            </InlineEditor>
        );
    },
};

export const NewItem: Story = {
    render: () => {
        const [items, setItems] = createSignal<string[]>(['item 1', 'item 2']);

        return (
            <div class='flex size-96 flex-col gap-2 rounded-default bg-surface-1 p-2 outline outline-border'>
                <For each={items()}>
                    {(item) => (
                        <div class='rounded-default bg-surface-2 p-2 outline outline-border'>
                            {item}
                        </div>
                    )}
                </For>
                <InlineEditor
                    fallbackValue={`item ${items().length + 1}`}
                    onSave={(val) => setItems((prev) => [...prev, val])}
                >
                    <InlineEditor.Display>
                        {(setOpen) => (
                            <Button
                                class='ml-auto'
                                onClick={() => setOpen(true)}
                            >
                                New Item
                            </Button>
                        )}
                    </InlineEditor.Display>
                    <InlineEditor.Input />
                    <InlineEditor.Save />
                    <InlineEditor.Cancel />
                </InlineEditor>
            </div>
        );
    },
};
