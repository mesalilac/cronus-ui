import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowCodeBlock } from './IconSystemWindowCodeBlock';

const meta = {
    title: 'Icon/System/WindowCodeBlock',
    component: IconSystemWindowCodeBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindowCodeBlock>;

export default meta;
type Story = StoryObj<typeof IconSystemWindowCodeBlock>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
