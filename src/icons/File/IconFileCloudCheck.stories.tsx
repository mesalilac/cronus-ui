import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudCheck } from './IconFileCloudCheck';

const meta = {
    title: 'Icon/File/CloudCheck',
    component: IconFileCloudCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudCheck>;

export default meta;
type Story = StoryObj<typeof IconFileCloudCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
