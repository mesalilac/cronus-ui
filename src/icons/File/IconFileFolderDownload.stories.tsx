import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderDownload as IconComp } from './IconFileFolderDownload';

const meta = {
    title: 'Icon/File/FolderDownload',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderDownload: Story = {
    args: {
        size: '6rem',
    },
};
