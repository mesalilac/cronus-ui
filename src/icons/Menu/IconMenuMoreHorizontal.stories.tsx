import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreHorizontal as IconComp } from './IconMenuMoreHorizontal';

const meta = {
    title: 'Icon/Menu/MoreHorizontal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MoreHorizontal: Story = {
    args: {
        size: '6rem',
    },
};
