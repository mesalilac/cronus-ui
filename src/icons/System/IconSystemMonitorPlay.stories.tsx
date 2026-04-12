import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMonitorPlay as IconComp } from './IconSystemMonitorPlay';

const meta = {
    title: 'Icon/System/MonitorPlay',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MonitorPlay: Story = {
    args: {
        size: '6rem',
    },
};
