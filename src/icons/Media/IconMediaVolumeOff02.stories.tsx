import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeOff02 as IconComp } from './IconMediaVolumeOff02';

const meta = {
    title: 'Icon/Media/VolumeOff02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconVolumeOff02: Story = {
    name: 'VolumeOff02',
    args: {
        size: '6rem',
    },
};
