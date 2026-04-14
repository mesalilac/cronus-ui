import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudDownload as IconComp } from './IconFileCloudDownload';

const meta = {
    title: 'Icon/File/CloudDownload',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudDownload: Story = {
    name: 'CloudDownload',
    args: {
        size: '6rem',
    },
};
