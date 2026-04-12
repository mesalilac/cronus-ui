import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderEdit } from './IconFileFolderEdit';

const meta = {
    title: 'Icon/File/FolderEdit',
    component: IconFileFolderEdit,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderEdit>;

export default meta;
type Story = StoryObj<typeof IconFileFolderEdit>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
