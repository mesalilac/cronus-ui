import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrendingDown } from './IconInterfaceTrendingDown';

const meta = {
    title: 'Icon/Interface/TrendingDown',
    component: IconInterfaceTrendingDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTrendingDown>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTrendingDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
