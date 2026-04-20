import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { FieldLabel } from './FieldLabel';

const meta = {
    title: 'Ui/FieldLabel',
    component: FieldLabel,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof FieldLabel>;

export const Default: Story = {
    args: {
        label: 'label',
    },
};

export const Required: Story = {
    args: {
        label: 'label',
        required: true,
    },
};
