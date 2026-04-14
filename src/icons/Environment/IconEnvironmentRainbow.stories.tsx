import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentRainbow as IconComp } from './IconEnvironmentRainbow';

const meta = {
    title: 'Icon/Environment/Rainbow',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRainbow: Story = {
    name: 'Rainbow'
    args: {
        size: '6rem',
    },
};
