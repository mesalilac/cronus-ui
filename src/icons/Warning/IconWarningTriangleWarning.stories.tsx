import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningTriangleWarning } from './IconWarningTriangleWarning';

const meta = {
    title: 'Icon/Warning/TriangleWarning',
    component: IconWarningTriangleWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningTriangleWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningTriangleWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
