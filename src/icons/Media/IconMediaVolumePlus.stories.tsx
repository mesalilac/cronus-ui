import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumePlus } from './IconMediaVolumePlus';

const meta = {
    title: 'Icon/Media/VolumePlus',
    component: IconMediaVolumePlus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumePlus>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumePlus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
