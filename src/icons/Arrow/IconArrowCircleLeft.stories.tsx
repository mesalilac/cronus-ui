import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleLeft } from './IconArrowCircleLeft';

const meta = {
    title: 'Icon/Arrow/CircleLeft',
    component: IconArrowCircleLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
