import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentSun } from './IconEnvironmentSun';

const meta = {
    title: 'Icon/Environment/Sun',
    component: IconEnvironmentSun,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentSun>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentSun>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
