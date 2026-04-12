import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeOff } from './IconMediaVolumeOff';

const meta = {
    title: 'Icon/Media/VolumeOff',
    component: IconMediaVolumeOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumeOff>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumeOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
