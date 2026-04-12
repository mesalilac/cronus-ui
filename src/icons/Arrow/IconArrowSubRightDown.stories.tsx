import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubRightDown } from './IconArrowSubRightDown';

const meta = {
    title: 'Icon/Arrow/SubRightDown',
    component: IconArrowSubRightDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubRightDown>;

export default meta;
type Story = StoryObj<typeof IconArrowSubRightDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
