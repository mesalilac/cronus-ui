import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { EditableText } from './EditableText';

const meta = {
    title: 'Ui/EditableText',
    component: EditableText,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EditableText>;

export default meta;
type Story = StoryObj<typeof EditableText>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('Example Text');

        return <EditableText onSave={setValue} value={value()} />;
    },
};
