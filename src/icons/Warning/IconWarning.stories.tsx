import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarning } from './IconWarning';

const meta = {
    title: 'Icon/Warning',
    component: IconWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarning>;

export default meta;
type Story = StoryObj<typeof IconWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
