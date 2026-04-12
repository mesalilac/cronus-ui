import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMin as IconComp } from './IconMediaVolumeMin';

const meta = {
    title: 'Icon/Media/VolumeMin',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const VolumeMin: Story = {
    args: {
        size: '6rem',
    },
};
