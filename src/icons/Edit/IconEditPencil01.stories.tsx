import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencil01 } from './IconEditPencil01';

const meta = {
    title: 'Icon/Edit/Pencil01',
    component: IconEditPencil01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPencil01>;

export default meta;
type Story = StoryObj<typeof IconEditPencil01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
