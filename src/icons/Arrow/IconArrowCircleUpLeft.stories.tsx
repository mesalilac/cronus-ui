import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUpLeft } from './IconArrowCircleUpLeft';

const meta = {
    title: 'Icon/Arrow/CircleUpLeft',
    component: IconArrowCircleUpLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleUpLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleUpLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
