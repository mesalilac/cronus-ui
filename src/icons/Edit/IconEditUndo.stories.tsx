import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditUndo } from './IconEditUndo';

const meta = {
    title: 'Icon/Edit/Undo',
    component: IconEditUndo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditUndo>;

export default meta;
type Story = StoryObj<typeof IconEditUndo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
