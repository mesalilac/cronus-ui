import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileS } from './IconFileS';

const meta = {
    title: 'Icon/File/S',
    component: IconFileS,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileS>;

export default meta;
type Story = StoryObj<typeof IconFileS>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
