import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiOff } from './IconSystemWifiOff';

const meta = {
    title: 'Icon/System/WifiOff',
    component: IconSystemWifiOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiOff>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
