import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiMedium } from './IconSystemWifiMedium';

const meta = {
    title: 'Icon/System/WifiMedium',
    component: IconSystemWifiMedium,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiMedium>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiMedium>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
