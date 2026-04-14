import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartLine as IconComp } from './IconInterfaceChartLine';

const meta = {
    title: 'Icon/Interface/ChartLine',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChartLine: Story = {
    name: 'ChartLine',
    args: {
        size: '6rem',
    },
};
