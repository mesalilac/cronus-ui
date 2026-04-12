import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCloseCircle } from './IconEditCloseCircle';

const meta = {
    title: 'Icon/Edit/CloseCircle',
    component: IconEditCloseCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditCloseCircle>;

export default meta;
type Story = StoryObj<typeof IconEditCloseCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
