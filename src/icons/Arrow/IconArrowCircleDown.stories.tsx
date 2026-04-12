import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDown as IconComp } from './IconArrowCircleDown';

const meta = {
    title: 'Icon/Arrow/CircleDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleDown: Story = {
    args: {
        size: '6rem',
    },
};
