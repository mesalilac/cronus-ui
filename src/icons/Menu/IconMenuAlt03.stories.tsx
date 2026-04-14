import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt03 as IconComp } from './IconMenuAlt03';

const meta = {
    title: 'Icon/Menu/Alt03',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAlt03: Story = {
    name: 'Alt03'
    args: {
        size: '6rem',
    },
};
