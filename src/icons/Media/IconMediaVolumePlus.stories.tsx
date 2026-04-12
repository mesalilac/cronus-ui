import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumePlus as IconComp } from './IconMediaVolumePlus';

const meta = {
    title: 'Icon/Media/VolumePlus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const VolumePlus: Story = {
    args: {
        size: '6rem',
    },
};
