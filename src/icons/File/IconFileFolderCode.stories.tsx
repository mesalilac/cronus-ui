import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderCode as IconComp } from './IconFileFolderCode';

const meta = {
    title: 'Icon/File/FolderCode',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderCode: Story = {
    args: {
        size: '6rem',
    },
};
