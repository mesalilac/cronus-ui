import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt01 } from './IconMenuAlt01';

const meta = {
    title: 'Icon/Menu/Alt01',
    component: IconMenuAlt01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuAlt01>;

export default meta;
type Story = StoryObj<typeof IconMenuAlt01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
