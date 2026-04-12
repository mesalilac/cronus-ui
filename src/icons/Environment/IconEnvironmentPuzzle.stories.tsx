import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentPuzzle } from './IconEnvironmentPuzzle';

const meta = {
    title: 'Icon/Environment/Puzzle',
    component: IconEnvironmentPuzzle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEnvironmentPuzzle>;

export default meta;
type Story = StoryObj<typeof IconEnvironmentPuzzle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
