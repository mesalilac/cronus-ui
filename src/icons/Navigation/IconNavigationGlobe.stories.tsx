import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationGlobe } from './IconNavigationGlobe';

const meta = {
    title: 'Icon/Navigation/Globe',
    component: IconNavigationGlobe,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationGlobe>;

export default meta;
type Story = StoryObj<typeof IconNavigationGlobe>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
