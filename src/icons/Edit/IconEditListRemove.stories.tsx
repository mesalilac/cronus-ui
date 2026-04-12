import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListRemove } from './IconEditListRemove';

const meta = {
    title: 'Icon/Edit/ListRemove',
    component: IconEditListRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListRemove>;

export default meta;
type Story = StoryObj<typeof IconEditListRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
