import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeCircle as IconComp } from './IconShapeCircle';

const meta = {
    title: 'Icon/Shape/Circle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Circle: Story = {
    args: {
        size: '6rem',
    },
};
