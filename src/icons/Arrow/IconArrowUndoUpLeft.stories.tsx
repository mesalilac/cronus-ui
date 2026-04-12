import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoUpLeft as IconComp } from './IconArrowUndoUpLeft';

const meta = {
    title: 'Icon/Arrow/UndoUpLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const UndoUpLeft: Story = {
    args: {
        size: '6rem',
    },
};
