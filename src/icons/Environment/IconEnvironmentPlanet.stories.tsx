import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentPlanet as IconComp } from './IconEnvironmentPlanet';

const meta = {
    title: 'Icon/Environment/Planet',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPlanet: Story = {
    name: 'Planet'
    args: {
        size: '6rem',
    },
};
