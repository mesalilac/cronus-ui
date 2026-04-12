import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentFirstAid as IconComp } from './IconEnvironmentFirstAid';

const meta = {
    title: 'Icon/Environment/FirstAid',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FirstAid: Story = {
    args: {
        size: '6rem',
    },
};
