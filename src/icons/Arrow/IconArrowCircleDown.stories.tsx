import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDown } from './IconArrowCircleDown';

const meta = {
    title: 'Icon/Arrow/CircleDown',
    component: IconArrowCircleDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleDown>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
