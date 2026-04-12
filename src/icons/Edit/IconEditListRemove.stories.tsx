import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListRemove as IconComp } from './IconEditListRemove';

const meta = {
    title: 'Icon/Edit/ListRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ListRemove: Story = {
    args: {
        size: '6rem',
    },
};
