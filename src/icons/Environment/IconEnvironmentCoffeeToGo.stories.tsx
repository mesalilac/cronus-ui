import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCoffeeToGo as IconComp } from './IconEnvironmentCoffeeToGo';

const meta = {
    title: 'Icon/Environment/CoffeeToGo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CoffeeToGo: Story = {
    args: {
        size: '6rem',
    },
};
