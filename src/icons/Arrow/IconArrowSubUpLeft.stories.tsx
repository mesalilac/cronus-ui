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

export const SubUpLeft: Story = {
    args: {
        size: '6rem',
    },
};
