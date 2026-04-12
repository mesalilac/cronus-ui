import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMonitorPlay } from './IconSystemMonitorPlay';

const meta = {
    title: 'Icon/System/MonitorPlay',
    component: IconSystemMonitorPlay,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMonitorPlay>;

export default meta;
type Story = StoryObj<typeof IconSystemMonitorPlay>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
