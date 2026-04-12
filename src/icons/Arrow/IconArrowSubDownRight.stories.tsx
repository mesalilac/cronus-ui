import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubDownRight } from './IconArrowSubDownRight';

const meta = {
    title: 'Icon/Arrow/SubDownRight',
    component: IconArrowSubDownRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubDownRight>;

export default meta;
type Story = StoryObj<typeof IconArrowSubDownRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
