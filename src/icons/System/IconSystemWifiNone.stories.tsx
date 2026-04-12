import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiNone as IconComp } from './IconSystemWifiNone';

const meta = {
    title: 'Icon/System/WifiNone',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WifiNone: Story = {
    args: {
        size: '6rem',
    },
};
