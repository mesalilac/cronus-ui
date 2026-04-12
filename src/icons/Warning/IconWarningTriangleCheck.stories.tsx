import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningTriangleCheck } from './IconWarningTriangleCheck';

const meta = {
    title: 'Icon/Warning/TriangleCheck',
    component: IconWarningTriangleCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningTriangleCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningTriangleCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
