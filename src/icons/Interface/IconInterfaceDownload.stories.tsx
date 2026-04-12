import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDownload } from './IconInterfaceDownload';

const meta = {
    title: 'Icon/Interface/Download',
    component: IconInterfaceDownload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDownload>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDownload>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
