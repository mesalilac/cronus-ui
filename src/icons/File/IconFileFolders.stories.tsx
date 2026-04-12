import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolders } from './IconFileFolders';

const meta = {
    title: 'Icon/File/Folders',
    component: IconFileFolders,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolders>;

export default meta;
type Story = StoryObj<typeof IconFileFolders>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
