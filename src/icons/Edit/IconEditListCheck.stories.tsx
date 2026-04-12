import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListCheck } from './IconEditListCheck';

const meta = {
    title: 'Icon/Edit/ListCheck',
    component: IconEditListCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListCheck>;

export default meta;
type Story = StoryObj<typeof IconEditListCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
