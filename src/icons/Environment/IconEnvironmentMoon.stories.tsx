import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentMoon } from './IconEnvironmentMoon';

const meta = {
    title: 'Icon/Environment/Moon',
    component: IconEnvironmentMoon,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentMoon>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentMoon>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
