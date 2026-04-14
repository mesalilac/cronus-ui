import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuHamburgerMd as IconComp } from './IconMenuHamburgerMd';

const meta = {
    title: 'Icon/Menu/HamburgerMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHamburgerMd: Story = {
    name: 'HamburgerMd',
    args: {
        size: '6rem',
    },
};
