import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudOff } from './IconFileCloudOff';

const meta = {
    title: 'Icon/File/CloudOff',
    component: IconFileCloudOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudOff>;

export default meta;
type Story = StoryObj<typeof IconFileCloudOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
