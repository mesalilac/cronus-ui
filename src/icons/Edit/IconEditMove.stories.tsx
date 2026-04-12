import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMove } from './IconEditMove';

const meta = {
    title: 'Icon/Edit/Move',
    component: IconEditMove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditMove>;

export default meta;
type Story = StoryObj<typeof IconEditMove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
