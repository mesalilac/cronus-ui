import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubUpRight as IconComp } from './IconArrowSubUpRight';

const meta = {
    title: 'Icon/Arrow/SubUpRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSubUpRight: Story = {
    name: 'SubUpRight',
    args: {
        size: '6rem',
    },
};
