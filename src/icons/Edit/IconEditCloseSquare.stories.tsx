import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCloseSquare as IconComp } from './IconEditCloseSquare';

const meta = {
    title: 'Icon/Edit/CloseSquare',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloseSquare: Story = {
    name: 'CloseSquare'
    args: {
        size: '6rem',
    },
};
