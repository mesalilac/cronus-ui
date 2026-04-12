import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRedo } from './IconEditRedo';

const meta = {
    title: 'Icon/Edit/Redo',
    component: IconEditRedo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditRedo>;

export default meta;
type Story = StoryObj<typeof IconEditRedo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
