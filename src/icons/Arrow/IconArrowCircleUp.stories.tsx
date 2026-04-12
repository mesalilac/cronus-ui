import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUp as IconComp } from './IconArrowCircleUp';

const meta = {
    title: 'Icon/Arrow/CircleUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleUp: Story = {
    args: {
        size: '6rem',
    },
};
