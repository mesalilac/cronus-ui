import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreGridBig as IconComp } from './IconMenuMoreGridBig';

const meta = {
    title: 'Icon/Menu/MoreGridBig',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMoreGridBig: Story = {
    name: 'MoreGridBig'
    args: {
        size: '6rem',
    },
};
