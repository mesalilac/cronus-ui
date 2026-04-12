import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiHigh } from './IconSystemWifiHigh';

const meta = {
    title: 'Icon/System/WifiHigh',
    component: IconSystemWifiHigh,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiHigh>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiHigh>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
