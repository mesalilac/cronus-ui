import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCopy } from './IconEditCopy';

const meta = {
    title: 'Icon/Edit/Copy',
    component: IconEditCopy,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditCopy>;

export default meta;
type Story = StoryObj<typeof IconEditCopy>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
