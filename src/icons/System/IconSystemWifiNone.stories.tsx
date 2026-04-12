import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiNone } from './IconSystemWifiNone';

const meta = {
    title: 'Icon/System/WifiNone',
    component: IconSystemWifiNone,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiNone>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiNone>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
