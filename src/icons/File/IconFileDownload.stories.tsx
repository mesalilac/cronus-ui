import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDownload } from './IconFileDownload';

const meta = {
    title: 'Icon/File/Download',
    component: IconFileDownload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileDownload>;

export default meta;
type Story = StoryObj<typeof IconFileDownload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
