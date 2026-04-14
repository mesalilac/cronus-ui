import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDownloadPackage as IconComp } from './IconFileDownloadPackage';

const meta = {
    title: 'Icon/File/DownloadPackage',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownloadPackage: Story = {
    name: 'DownloadPackage'
    args: {
        size: '6rem',
    },
};
