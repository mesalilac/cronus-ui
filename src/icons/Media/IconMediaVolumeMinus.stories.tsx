import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMinus as IconComp } from './IconMediaVolumeMinus';

const meta = {
    title: 'Icon/Media/VolumeMinus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconVolumeMinus: Story = {
    name: 'VolumeMinus'
    args: {
        size: '6rem',
    },
};
