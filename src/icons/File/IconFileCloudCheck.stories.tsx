import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudCheck as IconComp } from './IconFileCloudCheck';

const meta = {
    title: 'Icon/File/CloudCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudCheck: Story = {
    name: 'CloudCheck',
    args: {
        size: '6rem',
    },
};
