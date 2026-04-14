import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderOpen as IconComp } from './IconFileFolderOpen';

const meta = {
    title: 'Icon/File/FolderOpen',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolderOpen: Story = {
    name: 'FolderOpen'
    args: {
        size: '6rem',
    },
};
