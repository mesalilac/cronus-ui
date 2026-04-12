import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderUpload } from './IconFileFolderUpload';

const meta = {
    title: 'Icon/File/FolderUpload',
    component: IconFileFolderUpload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderUpload>;

export default meta;
type Story = StoryObj<typeof IconFileFolderUpload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
