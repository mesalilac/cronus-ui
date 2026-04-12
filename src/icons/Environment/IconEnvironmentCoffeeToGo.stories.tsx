import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCoffeeToGo } from './IconEnvironmentCoffeeToGo';

const meta = {
    title: 'Icon/Environment/CoffeeToGo',
    component: IconEnvironmentCoffeeToGo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentCoffeeToGo>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentCoffeeToGo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
