import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudRemove as IconComp } from './IconFileCloudRemove';

const meta = {
    title: 'Icon/File/CloudRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CloudRemove: Story = {
    args: {
        size: '6rem',
    },
};
