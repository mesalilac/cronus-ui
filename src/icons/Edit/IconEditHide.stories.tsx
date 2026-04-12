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

export const Hide: Story = {
    args: {
        size: '6rem',
    },
};
