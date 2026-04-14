import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRemoveMinus as IconComp } from './IconEditRemoveMinus';

const meta = {
    title: 'Icon/Edit/RemoveMinus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRemoveMinus: Story = {
    name: 'RemoveMinus'
    args: {
        size: '6rem',
    },
};
