import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderDocument as IconComp } from './IconFileFolderDocument';

const meta = {
    title: 'Icon/File/FolderDocument',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolderDocument: Story = {
    name: 'FolderDocument'
    args: {
        size: '6rem',
    },
};
