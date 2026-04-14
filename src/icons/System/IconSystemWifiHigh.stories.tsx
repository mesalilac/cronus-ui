import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiHigh as IconComp } from './IconSystemWifiHigh';

const meta = {
    title: 'Icon/System/WifiHigh',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWifiHigh: Story = {
    name: 'WifiHigh',
    args: {
        size: '6rem',
    },
};
