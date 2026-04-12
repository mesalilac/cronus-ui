import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderClose } from './IconFileFolderClose';

const meta = {
    title: 'Icon/File/FolderClose',
    component: IconFileFolderClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderClose>;

export default meta;
type Story = StoryObj<typeof IconFileFolderClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
