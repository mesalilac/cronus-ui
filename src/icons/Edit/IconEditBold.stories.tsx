import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditBold } from './IconEditBold';

const meta = {
    title: 'Icon/Edit/Bold',
    component: IconEditBold,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditBold>;

export default meta;
type Story = StoryObj<typeof IconEditBold>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
