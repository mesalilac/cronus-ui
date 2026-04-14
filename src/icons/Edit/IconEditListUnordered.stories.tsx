import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListUnordered as IconComp } from './IconEditListUnordered';

const meta = {
    title: 'Icon/Edit/ListUnordered',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconListUnordered: Story = {
    name: 'ListUnordered',
    args: {
        size: '6rem',
    },
};
