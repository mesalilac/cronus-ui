import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddToQueue } from './IconEditAddToQueue';

const meta = {
    title: 'Icon/Edit/AddToQueue',
    component: IconEditAddToQueue,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddToQueue>;

export default meta;
type Story = StoryObj<typeof IconEditAddToQueue>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
