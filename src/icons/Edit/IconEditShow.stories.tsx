import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditShow } from './IconEditShow';

const meta = {
    title: 'Icon/Edit/Show',
    component: IconEditShow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditShow>;

export default meta;
type Story = StoryObj<typeof IconEditShow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
