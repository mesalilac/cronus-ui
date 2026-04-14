import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentMoon as IconComp } from './IconEnvironmentMoon';

const meta = {
    title: 'Icon/Environment/Moon',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMoon: Story = {
    name: 'Moon'
    args: {
        size: '6rem',
    },
};
