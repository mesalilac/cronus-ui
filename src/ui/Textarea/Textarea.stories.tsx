import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Textarea } from './Textarea';

const meta = {
    title: 'Ui/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Textarea onInput={setValue} value={value()} />;
    },
};
