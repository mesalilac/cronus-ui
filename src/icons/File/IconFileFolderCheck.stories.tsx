import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderCheck } from './IconFileFolderCheck';

const meta = {
    title: 'Icon/File/FolderCheck',
    component: IconFileFolderCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderCheck>;

export default meta;
type Story = StoryObj<typeof IconFileFolderCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
