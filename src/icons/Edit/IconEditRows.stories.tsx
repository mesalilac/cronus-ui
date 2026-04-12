import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRows } from './IconEditRows';

const meta = {
    title: 'Icon/Edit/Rows',
    component: IconEditRows,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditRows>;

export default meta;
type Story = StoryObj<typeof IconEditRows>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
