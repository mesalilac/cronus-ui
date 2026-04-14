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

export const IconTriangle: Story = {
    name: 'Triangle',
    args: {
        size: '6rem',
    },
};
