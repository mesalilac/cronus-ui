import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencilLine01 } from './IconEditPencilLine01';

const meta = {
    title: 'Icon/Edit/PencilLine01',
    component: IconEditPencilLine01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPencilLine01>;

export default meta;
type Story = StoryObj<typeof IconEditPencilLine01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
