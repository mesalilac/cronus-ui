import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListAdd as IconComp } from './IconEditListAdd';

const meta = {
    title: 'Icon/Edit/ListAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ListAdd: Story = {
    args: {
        size: '6rem',
    },
};
