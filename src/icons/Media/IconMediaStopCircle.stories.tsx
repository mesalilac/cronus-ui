import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaStopCircle } from './IconMediaStopCircle';

const meta = {
    title: 'Icon/Media/StopCircle',
    component: IconMediaStopCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaStopCircle>;

export default meta;
type Story = StoryObj<typeof IconMediaStopCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
