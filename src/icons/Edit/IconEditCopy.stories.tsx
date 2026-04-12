import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCopy as IconComp } from './IconEditCopy';

const meta = {
    title: 'Icon/Edit/Copy',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Copy: Story = {
    args: {
        size: '6rem',
    },
};
