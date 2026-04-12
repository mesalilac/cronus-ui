import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentWaterDrop as IconComp } from './IconEnvironmentWaterDrop';

const meta = {
    title: 'Icon/Environment/WaterDrop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WaterDrop: Story = {
    args: {
        size: '6rem',
    },
};
