import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencilLine01 as IconComp } from './IconEditPencilLine01';

const meta = {
    title: 'Icon/Edit/PencilLine01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PencilLine01: Story = {
    args: {
        size: '6rem',
    },
};
