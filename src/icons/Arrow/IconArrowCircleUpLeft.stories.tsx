import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUpLeft as IconComp } from './IconArrowCircleUpLeft';

const meta = {
    title: 'Icon/Arrow/CircleUpLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleUpLeft: Story = {
    args: {
        size: '6rem',
    },
};
