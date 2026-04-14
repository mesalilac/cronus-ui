import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWifiProblem as IconComp } from './IconSystemWifiProblem';

const meta = {
    title: 'Icon/System/WifiProblem',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWifiProblem: Story = {
    name: 'WifiProblem',
    args: {
        size: '6rem',
    },
};
