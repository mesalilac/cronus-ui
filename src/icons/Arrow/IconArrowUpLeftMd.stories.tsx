import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftMd as IconComp } from './IconArrowUpLeftMd';

const meta = {
    title: 'Icon/Arrow/UpLeftMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpLeftMd: Story = {
    name: 'UpLeftMd'
    args: {
        size: '6rem',
    },
};
