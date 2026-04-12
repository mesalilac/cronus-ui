import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDeleteRow as IconComp } from './IconEditDeleteRow';

const meta = {
    title: 'Icon/Edit/DeleteRow',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DeleteRow: Story = {
    args: {
        size: '6rem',
    },
};
