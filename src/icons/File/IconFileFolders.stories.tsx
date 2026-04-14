import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolders as IconComp } from './IconFileFolders';

const meta = {
    title: 'Icon/File/Folders',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFolders: Story = {
    name: 'Folders',
    args: {
        size: '6rem',
    },
};
