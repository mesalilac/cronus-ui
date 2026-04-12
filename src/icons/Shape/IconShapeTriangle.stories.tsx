import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeTriangle } from './IconShapeTriangle';

const meta = {
    title: 'Icon/Shape/Triangle',
    component: IconShapeTriangle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeTriangle>;

export default meta;
type Story = StoryObj<typeof IconShapeTriangle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
