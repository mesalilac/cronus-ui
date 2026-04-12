import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderClose as IconComp } from './IconFileFolderClose';

const meta = {
    title: 'Icon/File/FolderClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderClose: Story = {
    args: {
        size: '6rem',
    },
};
