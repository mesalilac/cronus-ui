import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMove as IconComp } from './IconEditMove';

const meta = {
    title: 'Icon/Edit/Move',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMove: Story = {
    name: 'Move',
    args: {
        size: '6rem',
    },
};
