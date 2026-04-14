import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiOff as IconComp } from './IconSystemWifiOff';

const meta = {
    title: 'Icon/System/WifiOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWifiOff: Story = {
    name: 'WifiOff'
    args: {
        size: '6rem',
    },
};
