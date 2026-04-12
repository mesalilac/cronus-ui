import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubRightUp } from './IconArrowSubRightUp';

const meta = {
    title: 'Icon/Arrow/SubRightUp',
    component: IconArrowSubRightUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubRightUp>;

export default meta;
type Story = StoryObj<typeof IconArrowSubRightUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
