import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubUpLeft } from './IconArrowSubUpLeft';

const meta = {
    title: 'Icon/Arrow/SubUpLeft',
    component: IconArrowSubUpLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubUpLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowSubUpLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
