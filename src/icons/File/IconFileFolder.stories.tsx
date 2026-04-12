import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolder } from './IconFileFolder';

const meta = {
    title: 'Icon/File/Folder',
    component: IconFileFolder,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileFolder>;

export default meta;
type Story = StoryObj<typeof IconFileFolder>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
