import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloud } from './IconFileCloud';

const meta = {
    title: 'Icon/File/Cloud',
    component: IconFileCloud,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloud>;

export default meta;
type Story = StoryObj<typeof IconFileCloud>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
