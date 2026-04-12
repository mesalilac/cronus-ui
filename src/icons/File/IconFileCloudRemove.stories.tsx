import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudRemove } from './IconFileCloudRemove';

const meta = {
    title: 'Icon/File/CloudRemove',
    component: IconFileCloudRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudRemove>;

export default meta;
type Story = StoryObj<typeof IconFileCloudRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
