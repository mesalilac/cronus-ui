import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUp } from './IconArrowCircleUp';

const meta = {
    title: 'Icon/Arrow/CircleUp',
    component: IconArrowCircleUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleUp>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
