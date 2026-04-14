import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCircle as IconComp } from './IconUserCircle';

const meta = {
    title: 'Icon/User/Circle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircle: Story = {
    name: 'Circle'
    args: {
        size: '6rem',
    },
};
