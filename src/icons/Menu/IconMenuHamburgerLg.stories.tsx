import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuHamburgerLg as IconComp } from './IconMenuHamburgerLg';

const meta = {
    title: 'Icon/Menu/HamburgerLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHamburgerLg: Story = {
    name: 'HamburgerLg',
    args: {
        size: '6rem',
    },
};
