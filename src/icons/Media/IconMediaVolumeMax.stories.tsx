import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMax as IconComp } from './IconMediaVolumeMax';

const meta = {
    title: 'Icon/Media/VolumeMax',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const VolumeMax: Story = {
    args: {
        size: '6rem',
    },
};
