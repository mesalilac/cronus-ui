import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentWaterDrop } from './IconEnvironmentWaterDrop';

const meta = {
    title: 'Icon/Environment/WaterDrop',
    component: IconEnvironmentWaterDrop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentWaterDrop>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentWaterDrop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
