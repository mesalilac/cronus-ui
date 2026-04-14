import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddToQueue as IconComp } from './IconEditAddToQueue';

const meta = {
    title: 'Icon/Edit/AddToQueue',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAddToQueue: Story = {
    name: 'AddToQueue'
    args: {
        size: '6rem',
    },
};
