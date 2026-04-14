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

export const IconFirstAid: Story = {
    name: 'FirstAid'
    args: {
        size: '6rem',
    },
};
