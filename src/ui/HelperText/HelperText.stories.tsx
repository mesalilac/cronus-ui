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

export const DefaultVariant: Story = {
    args: {
        variant: 'default',
        children: 'Helper text',
    },
};

export const WarningVariant: Story = {
    args: {
        variant: 'warning',
        children: 'Helper text',
    },
};

export const DangerVariant: Story = {
    args: {
        variant: 'danger',
        children: 'Helper text',
    },
};
