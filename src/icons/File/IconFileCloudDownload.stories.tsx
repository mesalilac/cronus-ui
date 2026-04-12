import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudDownload } from './IconFileCloudDownload';

const meta = {
    title: 'Icon/File/CloudDownload',
    component: IconFileCloudDownload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudDownload>;

export default meta;
type Story = StoryObj<typeof IconFileCloudDownload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
