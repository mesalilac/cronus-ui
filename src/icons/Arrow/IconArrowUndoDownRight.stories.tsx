import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoDownRight } from './IconArrowUndoDownRight';

const meta = {
    title: 'Icon/Arrow/UndoDownRight',
    component: IconArrowUndoDownRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUndoDownRight>;

export default meta;
type Story = StoryObj<typeof IconArrowUndoDownRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
