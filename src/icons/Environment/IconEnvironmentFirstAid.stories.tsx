import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentFirstAid } from './IconEnvironmentFirstAid';

const meta = {
    title: 'Icon/Environment/FirstAid',
    component: IconEnvironmentFirstAid,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentFirstAid>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentFirstAid>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
