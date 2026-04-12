import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCookie } from './IconEnvironmentCookie';

const meta = {
    title: 'Icon/Environment/Cookie',
    component: IconEnvironmentCookie,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentCookie>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentCookie>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
