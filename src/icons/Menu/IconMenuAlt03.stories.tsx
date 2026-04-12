import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt03 } from './IconMenuAlt03';

const meta = {
    title: 'Icon/Menu/Alt03',
    component: IconMenuAlt03,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuAlt03>;

export default meta;
type Story = StoryObj<typeof IconMenuAlt03>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
