import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPause } from './IconMediaPause';

const meta = {
    title: 'Icon/Media/Pause',
    component: IconMediaPause,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaPause>;

export default meta;
type Story = StoryObj<typeof IconMediaPause>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
