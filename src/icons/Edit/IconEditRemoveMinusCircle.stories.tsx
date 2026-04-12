import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRemoveMinusCircle } from './IconEditRemoveMinusCircle';

const meta = {
    title: 'Icon/Edit/RemoveMinusCircle',
    component: IconEditRemoveMinusCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditRemoveMinusCircle>;

export default meta;
type Story = StoryObj<typeof IconEditRemoveMinusCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
