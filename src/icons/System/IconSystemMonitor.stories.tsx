import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMonitor as IconComp } from './IconSystemMonitor';

const meta = {
    title: 'Icon/System/Monitor',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMonitor: Story = {
    name: 'Monitor'
    args: {
        size: '6rem',
    },
};
