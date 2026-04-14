import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentBulb as IconComp } from './IconEnvironmentBulb';

const meta = {
    title: 'Icon/Environment/Bulb',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBulb: Story = {
    name: 'Bulb',
    args: {
        size: '6rem',
    },
};
