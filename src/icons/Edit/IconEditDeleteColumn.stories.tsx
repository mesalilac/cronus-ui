import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDeleteColumn as IconComp } from './IconEditDeleteColumn';

const meta = {
    title: 'Icon/Edit/DeleteColumn',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DeleteColumn: Story = {
    args: {
        size: '6rem',
    },
};
