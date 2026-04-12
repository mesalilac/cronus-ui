import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaShuffle } from './IconMediaShuffle';

const meta = {
    title: 'Icon/Media/Shuffle',
    component: IconMediaShuffle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaShuffle>;

export default meta;
type Story = StoryObj<typeof IconMediaShuffle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
