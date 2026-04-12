import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRemoveMinus } from './IconEditRemoveMinus';

const meta = {
    title: 'Icon/Edit/RemoveMinus',
    component: IconEditRemoveMinus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditRemoveMinus>;

export default meta;
type Story = StoryObj<typeof IconEditRemoveMinus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
