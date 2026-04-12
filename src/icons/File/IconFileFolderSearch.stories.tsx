import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderSearch as IconComp } from './IconFileFolderSearch';

const meta = {
    title: 'Icon/File/FolderSearch',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderSearch: Story = {
    args: {
        size: '6rem',
    },
};
