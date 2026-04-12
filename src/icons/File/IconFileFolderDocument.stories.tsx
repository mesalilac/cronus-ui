import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderDocument } from './IconFileFolderDocument';

const meta = {
    title: 'Icon/File/FolderDocument',
    component: IconFileFolderDocument,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolderDocument>;

export default meta;
type Story = StoryObj<typeof IconFileFolderDocument>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
