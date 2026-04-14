import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaShuffle as IconComp } from './IconMediaShuffle';

const meta = {
    title: 'Icon/Media/Shuffle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShuffle: Story = {
    name: 'Shuffle',
    args: {
        size: '6rem',
    },
};
