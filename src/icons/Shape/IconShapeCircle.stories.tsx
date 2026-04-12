import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeCircle } from './IconShapeCircle';

const meta = {
    title: 'Icon/Shape/Circle',
    component: IconShapeCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeCircle>;

export default meta;
type Story = StoryObj<typeof IconShapeCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
