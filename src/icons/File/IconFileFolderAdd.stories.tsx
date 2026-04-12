import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderAdd as IconComp } from './IconFileFolderAdd';

const meta = {
    title: 'Icon/File/FolderAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderAdd: Story = {
    args: {
        size: '6rem',
    },
};
