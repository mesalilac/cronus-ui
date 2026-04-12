import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHide } from './IconEditHide';

const meta = {
    title: 'Icon/Edit/Hide',
    component: IconEditHide,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHide>;

export default meta;
type Story = StoryObj<typeof IconEditHide>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
