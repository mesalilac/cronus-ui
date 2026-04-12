import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDownloadPackage } from './IconFileDownloadPackage';

const meta = {
    title: 'Icon/File/DownloadPackage',
    component: IconFileDownloadPackage,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileDownloadPackage>;

export default meta;
type Story = StoryObj<typeof IconFileDownloadPackage>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
