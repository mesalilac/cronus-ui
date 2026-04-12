import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencil02 } from './IconEditPencil02';

const meta = {
    title: 'Icon/Edit/Pencil02',
    component: IconEditPencil02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPencil02>;

export default meta;
type Story = StoryObj<typeof IconEditPencil02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
