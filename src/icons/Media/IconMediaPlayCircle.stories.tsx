import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPlayCircle } from './IconMediaPlayCircle';

const meta = {
    title: 'Icon/Media/PlayCircle',
    component: IconMediaPlayCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaPlayCircle>;

export default meta;
type Story = StoryObj<typeof IconMediaPlayCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
