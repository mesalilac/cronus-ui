import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderCode } from './IconFileFolderCode';

const meta = {
    title: 'Icon/File/FolderCode',
    component: IconFileFolderCode,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderCode>;

export default meta;
type Story = StoryObj<typeof IconFileFolderCode>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
