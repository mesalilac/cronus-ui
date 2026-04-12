import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoUpRight } from './IconArrowUndoUpRight';

const meta = {
    title: 'Icon/Arrow/UndoUpRight',
    component: IconArrowUndoUpRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUndoUpRight>;

export default meta;
type Story = StoryObj<typeof IconArrowUndoUpRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
