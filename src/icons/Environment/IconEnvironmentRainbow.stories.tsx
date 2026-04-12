import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentRainbow } from './IconEnvironmentRainbow';

const meta = {
    title: 'Icon/Environment/Rainbow',
    component: IconEnvironmentRainbow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentRainbow>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentRainbow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
