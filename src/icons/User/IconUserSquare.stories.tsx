import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserSquare as IconComp } from './IconUserSquare';

const meta = {
    title: 'Icon/User/Square',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSquare: Story = {
    name: 'Square',
    args: {
        size: '6rem',
    },
};
