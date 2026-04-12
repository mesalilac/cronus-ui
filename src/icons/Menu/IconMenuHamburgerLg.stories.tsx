import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuHamburgerLg } from './IconMenuHamburgerLg';

const meta = {
    title: 'Icon/Menu/HamburgerLg',
    component: IconMenuHamburgerLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuHamburgerLg>;

export default meta;
type Story = StoryObj<typeof IconMenuHamburgerLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
