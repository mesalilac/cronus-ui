import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListUnordered } from './IconEditListUnordered';

const meta = {
    title: 'Icon/Edit/ListUnordered',
    component: IconEditListUnordered,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListUnordered>;

export default meta;
type Story = StoryObj<typeof IconEditListUnordered>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
