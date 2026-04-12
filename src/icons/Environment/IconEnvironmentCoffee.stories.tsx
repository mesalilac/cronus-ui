import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCoffee as IconComp } from './IconEnvironmentCoffee';

const meta = {
    title: 'Icon/Environment/Coffee',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Coffee: Story = {
    args: {
        size: '6rem',
    },
};
