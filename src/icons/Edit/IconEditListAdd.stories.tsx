import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListAdd } from './IconEditListAdd';

const meta = {
    title: 'Icon/Edit/ListAdd',
    component: IconEditListAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListAdd>;

export default meta;
type Story = StoryObj<typeof IconEditListAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
