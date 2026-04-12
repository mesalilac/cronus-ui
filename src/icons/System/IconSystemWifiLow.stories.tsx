import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiLow } from './IconSystemWifiLow';

const meta = {
    title: 'Icon/System/WifiLow',
    component: IconSystemWifiLow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiLow>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiLow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
