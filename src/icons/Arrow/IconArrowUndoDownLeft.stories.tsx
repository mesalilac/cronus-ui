import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoDownLeft } from './IconArrowUndoDownLeft';

const meta = {
    title: 'Icon/Arrow/UndoDownLeft',
    component: IconArrowUndoDownLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUndoDownLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowUndoDownLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
