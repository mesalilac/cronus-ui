import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartBarHorizontal01 as IconComp } from './IconInterfaceChartBarHorizontal01';

const meta = {
    title: 'Icon/Interface/ChartBarHorizontal01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChartBarHorizontal01: Story = {
    args: {
        size: '6rem',
    },
};
