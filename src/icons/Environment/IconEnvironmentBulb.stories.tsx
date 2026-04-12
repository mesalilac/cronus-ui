import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentBulb } from './IconEnvironmentBulb';

const meta = {
    title: 'Icon/Environment/Bulb',
    component: IconEnvironmentBulb,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentBulb>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentBulb>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
