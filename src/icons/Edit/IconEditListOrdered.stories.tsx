import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListOrdered } from './IconEditListOrdered';

const meta = {
    title: 'Icon/Edit/ListOrdered',
    component: IconEditListOrdered,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListOrdered>;

export default meta;
type Story = StoryObj<typeof IconEditListOrdered>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
