import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditShow as IconComp } from './IconEditShow';

const meta = {
    title: 'Icon/Edit/Show',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Show: Story = {
    args: {
        size: '6rem',
    },
};
