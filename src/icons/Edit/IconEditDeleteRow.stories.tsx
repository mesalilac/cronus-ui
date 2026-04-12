import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDeleteRow } from './IconEditDeleteRow';

const meta = {
    title: 'Icon/Edit/DeleteRow',
    component: IconEditDeleteRow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditDeleteRow>;

export default meta;
type Story = StoryObj<typeof IconEditDeleteRow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
