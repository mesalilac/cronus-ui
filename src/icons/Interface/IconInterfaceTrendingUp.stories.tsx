import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrendingUp as IconComp } from './IconInterfaceTrendingUp';

const meta = {
    title: 'Icon/Interface/TrendingUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTrendingUp: Story = {
    name: 'TrendingUp',
    args: {
        size: '6rem',
    },
};
