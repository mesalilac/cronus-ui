import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiLow as IconComp } from './IconSystemWifiLow';

const meta = {
    title: 'Icon/System/WifiLow',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWifiLow: Story = {
    name: 'WifiLow',
    args: {
        size: '6rem',
    },
};
