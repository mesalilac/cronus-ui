import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudUpload } from './IconFileCloudUpload';

const meta = {
    title: 'Icon/File/CloudUpload',
    component: IconFileCloudUpload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudUpload>;

export default meta;
type Story = StoryObj<typeof IconFileCloudUpload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
