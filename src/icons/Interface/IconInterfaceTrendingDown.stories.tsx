import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrendingDown as IconComp } from './IconInterfaceTrendingDown';

const meta = {
    title: 'Icon/Interface/TrendingDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TrendingDown: Story = {
    args: {
        size: '6rem',
    },
};
