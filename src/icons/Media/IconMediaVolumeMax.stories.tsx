import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMax } from './IconMediaVolumeMax';

const meta = {
    title: 'Icon/Media/VolumeMax',
    component: IconMediaVolumeMax,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumeMax>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumeMax>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
