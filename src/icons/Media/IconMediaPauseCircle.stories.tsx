import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPauseCircle } from './IconMediaPauseCircle';

const meta = {
    title: 'Icon/Media/PauseCircle',
    component: IconMediaPauseCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaPauseCircle>;

export default meta;
type Story = StoryObj<typeof IconMediaPauseCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
