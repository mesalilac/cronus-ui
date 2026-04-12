import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiProblem } from './IconSystemWifiProblem';

const meta = {
    title: 'Icon/System/WifiProblem',
    component: IconSystemWifiProblem,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWifiProblem>;

export default meta;
type Story = StoryObj<typeof IconSystemWifiProblem>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
