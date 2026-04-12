import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCoffee } from './IconEnvironmentCoffee';

const meta = {
    title: 'Icon/Environment/Coffee',
    component: IconEnvironmentCoffee,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentCoffee>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentCoffee>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
