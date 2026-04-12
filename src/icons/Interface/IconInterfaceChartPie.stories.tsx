import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartPie as IconComp } from './IconInterfaceChartPie';

const meta = {
    title: 'Icon/Interface/ChartPie',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChartPie: Story = {
    args: {
        size: '6rem',
    },
};
