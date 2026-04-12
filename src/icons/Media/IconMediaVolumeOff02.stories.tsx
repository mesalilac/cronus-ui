import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeOff02 } from './IconMediaVolumeOff02';

const meta = {
    title: 'Icon/Media/VolumeOff02',
    component: IconMediaVolumeOff02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumeOff02>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumeOff02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
