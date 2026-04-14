import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleRight as IconComp } from './IconArrowCircleRight';

const meta = {
    title: 'Icon/Arrow/CircleRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircleRight: Story = {
    name: 'CircleRight'
    args: {
        size: '6rem',
    },
};
