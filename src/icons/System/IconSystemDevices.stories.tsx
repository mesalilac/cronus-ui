import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDevices as IconComp } from './IconSystemDevices';

const meta = {
    title: 'Icon/System/Devices',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDevices: Story = {
    name: 'Devices',
    args: {
        size: '6rem',
    },
};
