import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencilLine02 } from './IconEditPencilLine02';

const meta = {
    title: 'Icon/Edit/PencilLine02',
    component: IconEditPencilLine02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPencilLine02>;

export default meta;
type Story = StoryObj<typeof IconEditPencilLine02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
