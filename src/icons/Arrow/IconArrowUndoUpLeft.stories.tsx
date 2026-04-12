import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoUpLeft } from './IconArrowUndoUpLeft';

const meta = {
    title: 'Icon/Arrow/UndoUpLeft',
    component: IconArrowUndoUpLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUndoUpLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowUndoUpLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
