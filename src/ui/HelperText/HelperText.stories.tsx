import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { HelperText } from './HelperText';

type Component = typeof HelperText;

const meta = {
    title: 'HelperText',
    component: HelperText,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
    args: {
        text: 'Helper text',
    },
};
