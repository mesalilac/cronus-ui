import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDevices } from './IconSystemDevices';

const meta = {
    title: 'Icon/System/Devices',
    component: IconSystemDevices,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemDevices>;

export default meta;
type Story = StoryObj<typeof IconSystemDevices>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
