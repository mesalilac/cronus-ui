import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeOff as IconComp } from './IconMediaVolumeOff';

const meta = {
    title: 'Icon/Media/VolumeOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconVolumeOff: Story = {
    name: 'VolumeOff'
    args: {
        size: '6rem',
    },
};
