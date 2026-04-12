import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderOpen } from './IconFileFolderOpen';

const meta = {
    title: 'Icon/File/FolderOpen',
    component: IconFileFolderOpen,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderOpen>;

export default meta;
type Story = StoryObj<typeof IconFileFolderOpen>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
