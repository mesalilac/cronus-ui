import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddColumn } from './IconEditAddColumn';

const meta = {
    title: 'Icon/Edit/AddColumn',
    component: IconEditAddColumn,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddColumn>;

export default meta;
type Story = StoryObj<typeof IconEditAddColumn>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
