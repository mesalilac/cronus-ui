import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHide as IconComp } from './IconEditHide';

const meta = {
    title: 'Icon/Edit/Hide',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHide: Story = {
    name: 'Hide'
    args: {
        size: '6rem',
    },
};
