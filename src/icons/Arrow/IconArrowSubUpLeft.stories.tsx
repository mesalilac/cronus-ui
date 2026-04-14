import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubUpLeft as IconComp } from './IconArrowSubUpLeft';

const meta = {
    title: 'Icon/Arrow/SubUpLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSubUpLeft: Story = {
    name: 'SubUpLeft'
    args: {
        size: '6rem',
    },
};
