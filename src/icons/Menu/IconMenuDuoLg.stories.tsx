import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuDuoLg as IconComp } from './IconMenuDuoLg';

const meta = {
    title: 'Icon/Menu/DuoLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDuoLg: Story = {
    name: 'DuoLg',
    args: {
        size: '6rem',
    },
};
