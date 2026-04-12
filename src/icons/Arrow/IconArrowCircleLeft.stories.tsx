import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleLeft as IconComp } from './IconArrowCircleLeft';

const meta = {
    title: 'Icon/Arrow/CircleLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleLeft: Story = {
    args: {
        size: '6rem',
    },
};
