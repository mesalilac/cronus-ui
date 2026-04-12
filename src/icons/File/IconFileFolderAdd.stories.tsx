import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderAdd } from './IconFileFolderAdd';

const meta = {
    title: 'Icon/File/FolderAdd',
    component: IconFileFolderAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderAdd>;

export default meta;
type Story = StoryObj<typeof IconFileFolderAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
