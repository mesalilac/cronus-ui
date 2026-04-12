import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { HelperText } from './HelperText';

const meta = {
    title: 'Ui/HelperText',
    component: HelperText,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
    args: {
        text: 'Helper text',
    },
};
