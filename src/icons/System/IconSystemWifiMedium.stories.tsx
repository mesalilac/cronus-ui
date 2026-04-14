import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiMedium as IconComp } from './IconSystemWifiMedium';

const meta = {
    title: 'Icon/System/WifiMedium',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWifiMedium: Story = {
    name: 'WifiMedium',
    args: {
        size: '6rem',
    },
};
