import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreVertical as IconComp } from './IconMenuMoreVertical';

const meta = {
    title: 'Icon/Menu/MoreVertical',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMoreVertical: Story = {
    name: 'MoreVertical',
    args: {
        size: '6rem',
    },
};
