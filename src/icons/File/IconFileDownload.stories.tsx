import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDownload as IconComp } from './IconFileDownload';

const meta = {
    title: 'Icon/File/Download',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownload: Story = {
    name: 'Download'
    args: {
        size: '6rem',
    },
};
