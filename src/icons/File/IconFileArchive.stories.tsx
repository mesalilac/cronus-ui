import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileArchive } from './IconFileArchive';

const meta = {
    title: 'Icon/File/Archive',
    component: IconFileArchive,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileArchive>;

export default meta;
type Story = StoryObj<typeof IconFileArchive>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
