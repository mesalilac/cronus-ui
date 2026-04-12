import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPlayCircle as IconComp } from './IconMediaPlayCircle';

const meta = {
    title: 'Icon/Media/PlayCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PlayCircle: Story = {
    args: {
        size: '6rem',
    },
};
