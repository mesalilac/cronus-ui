import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencil02 as IconComp } from './IconEditPencil02';

const meta = {
    title: 'Icon/Edit/Pencil02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Pencil02: Story = {
    args: {
        size: '6rem',
    },
};
