import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeTriangle as IconComp } from './IconShapeTriangle';

const meta = {
    title: 'Icon/Shape/Triangle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Triangle: Story = {
    args: {
        size: '6rem',
    },
};
