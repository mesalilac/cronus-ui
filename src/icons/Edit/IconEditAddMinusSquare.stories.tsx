import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddMinusSquare as IconComp } from './IconEditAddMinusSquare';

const meta = {
    title: 'Icon/Edit/AddMinusSquare',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAddMinusSquare: Story = {
    name: 'AddMinusSquare'
    args: {
        size: '6rem',
    },
};
