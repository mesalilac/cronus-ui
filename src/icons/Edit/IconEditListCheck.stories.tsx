import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListCheck as IconComp } from './IconEditListCheck';

const meta = {
    title: 'Icon/Edit/ListCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconListCheck: Story = {
    name: 'ListCheck',
    args: {
        size: '6rem',
    },
};
