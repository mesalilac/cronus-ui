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

export const IconPencil02: Story = {
    name: 'Pencil02'
    args: {
        size: '6rem',
    },
};
