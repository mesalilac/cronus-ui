import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMonitor } from './IconSystemMonitor';

const meta = {
    title: 'Icon/System/Monitor',
    component: IconSystemMonitor,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMonitor>;

export default meta;
type Story = StoryObj<typeof IconSystemMonitor>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
