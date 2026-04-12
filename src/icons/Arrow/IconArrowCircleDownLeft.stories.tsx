import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDownLeft } from './IconArrowCircleDownLeft';

const meta = {
    title: 'Icon/Arrow/CircleDownLeft',
    component: IconArrowCircleDownLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleDownLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleDownLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
