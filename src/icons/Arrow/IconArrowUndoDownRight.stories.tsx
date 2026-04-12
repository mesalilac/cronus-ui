import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoDownRight as IconComp } from './IconArrowUndoDownRight';

const meta = {
    title: 'Icon/Arrow/UndoDownRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const UndoDownRight: Story = {
    args: {
        size: '6rem',
    },
};
