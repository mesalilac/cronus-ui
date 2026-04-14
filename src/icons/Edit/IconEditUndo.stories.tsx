import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditUndo as IconComp } from './IconEditUndo';

const meta = {
    title: 'Icon/Edit/Undo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUndo: Story = {
    name: 'Undo',
    args: {
        size: '6rem',
    },
};
