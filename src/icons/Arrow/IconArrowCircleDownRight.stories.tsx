import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDownRight as IconComp } from './IconArrowCircleDownRight';

const meta = {
    title: 'Icon/Arrow/CircleDownRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircleDownRight: Story = {
    name: 'CircleDownRight'
    args: {
        size: '6rem',
    },
};
