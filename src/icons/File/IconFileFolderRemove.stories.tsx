import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderRemove as IconComp } from './IconFileFolderRemove';

const meta = {
    title: 'Icon/File/FolderRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolderRemove: Story = {
    name: 'FolderRemove'
    args: {
        size: '6rem',
    },
};
