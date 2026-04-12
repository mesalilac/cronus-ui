import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPencilLine02 as IconComp } from './IconEditPencilLine02';

const meta = {
    title: 'Icon/Edit/PencilLine02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PencilLine02: Story = {
    args: {
        size: '6rem',
    },
};
