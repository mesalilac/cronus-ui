import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt05 } from './IconMenuAlt05';

const meta = {
    title: 'Icon/Menu/Alt05',
    component: IconMenuAlt05,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuAlt05>;

export default meta;
type Story = StoryObj<typeof IconMenuAlt05>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
