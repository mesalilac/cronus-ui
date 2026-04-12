import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMin } from './IconMediaVolumeMin';

const meta = {
    title: 'Icon/Media/VolumeMin',
    component: IconMediaVolumeMin,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumeMin>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumeMin>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
