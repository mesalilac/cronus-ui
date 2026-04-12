import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentLeaf as IconComp } from './IconEnvironmentLeaf';

const meta = {
    title: 'Icon/Environment/Leaf',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Leaf: Story = {
    args: {
        size: '6rem',
    },
};
