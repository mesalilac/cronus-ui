import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUpRight as IconComp } from './IconArrowCircleUpRight';

const meta = {
    title: 'Icon/Arrow/CircleUpRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircleUpRight: Story = {
    name: 'CircleUpRight'
    args: {
        size: '6rem',
    },
};
