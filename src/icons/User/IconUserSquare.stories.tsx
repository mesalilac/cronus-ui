import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserSquare } from './IconUserSquare';

const meta = {
    title: 'Icon/User/Square',
    component: IconUserSquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserSquare>;

export default meta;
type Story = StoryObj<typeof IconUserSquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
