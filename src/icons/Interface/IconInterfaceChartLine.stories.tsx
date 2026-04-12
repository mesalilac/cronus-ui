import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartLine } from './IconInterfaceChartLine';

const meta = {
    title: 'Icon/Interface/ChartLine',
    component: IconInterfaceChartLine,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceChartLine>;

export default meta;
type Story = StoryObj<typeof IconInterfaceChartLine>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
