import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt01 as IconComp } from './IconMenuAlt01';

const meta = {
    title: 'Icon/Menu/Alt01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAlt01: Story = {
    name: 'Alt01'
    args: {
        size: '6rem',
    },
};
