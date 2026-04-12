import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoUpRight as IconComp } from './IconArrowUndoUpRight';

const meta = {
    title: 'Icon/Arrow/UndoUpRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const UndoUpRight: Story = {
    args: {
        size: '6rem',
    },
};
