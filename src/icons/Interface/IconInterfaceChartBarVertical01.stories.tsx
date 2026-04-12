import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartBarVertical01 } from './IconInterfaceChartBarVertical01';

const meta = {
    title: 'Icon/Interface/ChartBarVertical01',
    component: IconInterfaceChartBarVertical01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceChartBarVertical01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceChartBarVertical01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
