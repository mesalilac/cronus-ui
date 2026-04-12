import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartBarHorizontal01 } from './IconInterfaceChartBarHorizontal01';

const meta = {
    title: 'Icon/Interface/ChartBarHorizontal01',
    component: IconInterfaceChartBarHorizontal01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceChartBarHorizontal01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceChartBarHorizontal01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
