import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileEdit } from './IconFileEdit';

const meta = {
    title: 'Icon/File/Edit',
    component: IconFileEdit,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileEdit>;

export default meta;
type Story = StoryObj<typeof IconFileEdit>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
