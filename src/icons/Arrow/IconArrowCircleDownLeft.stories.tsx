import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDownLeft as IconComp } from './IconArrowCircleDownLeft';

const meta = {
    title: 'Icon/Arrow/CircleDownLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircleDownLeft: Story = {
    name: 'CircleDownLeft',
    args: {
        size: '6rem',
    },
};
