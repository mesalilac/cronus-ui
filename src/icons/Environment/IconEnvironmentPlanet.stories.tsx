import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentPlanet } from './IconEnvironmentPlanet';

const meta = {
    title: 'Icon/Environment/Planet',
    component: IconEnvironmentPlanet,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentPlanet>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentPlanet>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
