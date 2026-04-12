import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderSearch } from './IconFileFolderSearch';

const meta = {
    title: 'Icon/File/FolderSearch',
    component: IconFileFolderSearch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderSearch>;

export default meta;
type Story = StoryObj<typeof IconFileFolderSearch>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
