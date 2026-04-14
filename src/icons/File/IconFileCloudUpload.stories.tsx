import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudUpload as IconComp } from './IconFileCloudUpload';

const meta = {
    title: 'Icon/File/CloudUpload',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudUpload: Story = {
    name: 'CloudUpload'
    args: {
        size: '6rem',
    },
};
