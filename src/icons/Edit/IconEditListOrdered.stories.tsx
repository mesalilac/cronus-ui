import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListOrdered as IconComp } from './IconEditListOrdered';

const meta = {
    title: 'Icon/Edit/ListOrdered',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ListOrdered: Story = {
    args: {
        size: '6rem',
    },
};
