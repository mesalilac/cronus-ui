import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloudOff as IconComp } from './IconFileCloudOff';

const meta = {
    title: 'Icon/File/CloudOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloudOff: Story = {
    name: 'CloudOff',
    args: {
        size: '6rem',
    },
};
