import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolderCheck as IconComp } from './IconFileFolderCheck';

const meta = {
    title: 'Icon/File/FolderCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FolderCheck: Story = {
    args: {
        size: '6rem',
    },
};
