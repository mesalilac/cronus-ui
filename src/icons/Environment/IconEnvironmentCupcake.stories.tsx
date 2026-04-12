import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCupcake } from './IconEnvironmentCupcake';

const meta = {
    title: 'Icon/Environment/Cupcake',
    component: IconEnvironmentCupcake,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentCupcake>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentCupcake>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
