import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrendingUp } from './IconInterfaceTrendingUp';

const meta = {
    title: 'Icon/Interface/TrendingUp',
    component: IconInterfaceTrendingUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTrendingUp>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTrendingUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
