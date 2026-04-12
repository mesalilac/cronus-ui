import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuHamburgerMd } from './IconMenuHamburgerMd';

const meta = {
    title: 'Icon/Menu/HamburgerMd',
    component: IconMenuHamburgerMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuHamburgerMd>;

export default meta;
type Story = StoryObj<typeof IconMenuHamburgerMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
