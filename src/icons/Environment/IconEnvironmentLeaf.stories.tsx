import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentLeaf } from './IconEnvironmentLeaf';

const meta = {
    title: 'Icon/Environment/Leaf',
    component: IconEnvironmentLeaf,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentLeaf>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentLeaf>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
