import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderEdit as IconComp } from './IconFileFolderEdit';

const meta = {
    title: 'Icon/File/FolderEdit',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolderEdit: Story = {
    name: 'FolderEdit',
    args: {
        size: '6rem',
    },
};
