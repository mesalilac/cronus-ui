import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUndoDownLeft as IconComp } from './IconArrowUndoDownLeft';

const meta = {
    title: 'Icon/Arrow/UndoDownLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUndoDownLeft: Story = {
    name: 'UndoDownLeft'
    args: {
        size: '6rem',
    },
};
