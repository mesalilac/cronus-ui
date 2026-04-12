import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDeleteColumn } from './IconEditDeleteColumn';

const meta = {
    title: 'Icon/Edit/DeleteColumn',
    component: IconEditDeleteColumn,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditDeleteColumn>;

export default meta;
type Story = StoryObj<typeof IconEditDeleteColumn>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
