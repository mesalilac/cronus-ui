import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt02 as IconComp } from './IconMenuAlt02';

const meta = {
    title: 'Icon/Menu/Alt02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Alt02: Story = {
    args: {
        size: '6rem',
    },
};
