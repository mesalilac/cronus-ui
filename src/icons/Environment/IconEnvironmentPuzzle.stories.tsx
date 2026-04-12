import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentPuzzle as IconComp } from './IconEnvironmentPuzzle';

const meta = {
    title: 'Icon/Environment/Puzzle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Puzzle: Story = {
    args: {
        size: '6rem',
    },
};
