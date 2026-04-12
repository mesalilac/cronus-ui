import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowShrink as IconComp } from './IconArrowShrink';

const meta = {
    title: 'Icon/Arrow/Shrink',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Shrink: Story = {
    args: {
        size: '6rem',
    },
};
