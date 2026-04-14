import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudClose as IconComp } from './IconFileCloudClose';

const meta = {
    title: 'Icon/File/CloudClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudClose: Story = {
    name: 'CloudClose'
    args: {
        size: '6rem',
    },
};
