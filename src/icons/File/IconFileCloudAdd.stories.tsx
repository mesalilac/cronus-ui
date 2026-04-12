import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudAdd } from './IconFileCloudAdd';

const meta = {
    title: 'Icon/File/CloudAdd',
    component: IconFileCloudAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCloudAdd>;

export default meta;
type Story = StoryObj<typeof IconFileCloudAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
