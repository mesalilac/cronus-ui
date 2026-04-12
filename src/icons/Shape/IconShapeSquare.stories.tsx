import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeSquare } from './IconShapeSquare';

const meta = {
    title: 'Icon/Shape/Square',
    component: IconShapeSquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeSquare>;

export default meta;
type Story = StoryObj<typeof IconShapeSquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
