import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencil01 as IconComp } from './IconEditPencil01';

const meta = {
    title: 'Icon/Edit/Pencil01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPencil01: Story = {
    name: 'Pencil01'
    args: {
        size: '6rem',
    },
};
