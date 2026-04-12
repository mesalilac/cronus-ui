import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderDownload } from './IconFileFolderDownload';

const meta = {
    title: 'Icon/File/FolderDownload',
    component: IconFileFolderDownload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderDownload>;

export default meta;
type Story = StoryObj<typeof IconFileFolderDownload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
