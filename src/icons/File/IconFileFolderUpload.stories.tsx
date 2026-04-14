import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderUpload as IconComp } from './IconFileFolderUpload';

const meta = {
    title: 'Icon/File/FolderUpload',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolderUpload: Story = {
    name: 'FolderUpload'
    args: {
        size: '6rem',
    },
};
