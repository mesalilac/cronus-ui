import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderRemove } from './IconFileFolderRemove';

const meta = {
    title: 'Icon/File/FolderRemove',
    component: IconFileFolderRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderRemove>;

export default meta;
type Story = StoryObj<typeof IconFileFolderRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
