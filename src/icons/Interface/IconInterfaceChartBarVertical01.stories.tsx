import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceChartBarVertical01 as IconComp } from './IconInterfaceChartBarVertical01';

const meta = {
    title: 'Icon/Interface/ChartBarVertical01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChartBarVertical01: Story = {
    args: {
        size: '6rem',
    },
};
