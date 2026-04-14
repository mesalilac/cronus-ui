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

export const IconAlt02: Story = {
    name: 'Alt02',
    args: {
        size: '6rem',
    },
};
