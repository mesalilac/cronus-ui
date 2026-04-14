import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCupcake as IconComp } from './IconEnvironmentCupcake';

const meta = {
    title: 'Icon/Environment/Cupcake',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCupcake: Story = {
    name: 'Cupcake'
    args: {
        size: '6rem',
    },
};
