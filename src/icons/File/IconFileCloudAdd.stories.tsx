import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudAdd as IconComp } from './IconFileCloudAdd';

const meta = {
    title: 'Icon/File/CloudAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudAdd: Story = {
    name: 'CloudAdd',
    args: {
        size: '6rem',
    },
};
