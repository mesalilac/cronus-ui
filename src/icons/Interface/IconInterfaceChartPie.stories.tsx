import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartPie } from './IconInterfaceChartPie';

const meta = {
    title: 'Icon/Interface/ChartPie',
    component: IconInterfaceChartPie,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceChartPie>;

export default meta;
type Story = StoryObj<typeof IconInterfaceChartPie>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
