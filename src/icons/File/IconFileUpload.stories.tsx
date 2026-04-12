import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileUpload } from './IconFileUpload';

const meta = {
    title: 'Icon/File/Upload',
    component: IconFileUpload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileUpload>;

export default meta;
type Story = StoryObj<typeof IconFileUpload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
