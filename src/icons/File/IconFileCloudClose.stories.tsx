import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudClose } from './IconFileCloudClose';

const meta = {
    title: 'Icon/File/CloudClose',
    component: IconFileCloudClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudClose>;

export default meta;
type Story = StoryObj<typeof IconFileCloudClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
