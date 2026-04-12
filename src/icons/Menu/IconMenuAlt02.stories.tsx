import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt02 } from './IconMenuAlt02';

const meta = {
    title: 'Icon/Menu/Alt02',
    component: IconMenuAlt02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuAlt02>;

export default meta;
type Story = StoryObj<typeof IconMenuAlt02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
