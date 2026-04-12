import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftMd } from './IconArrowUpLeftMd';

const meta = {
    title: 'Icon/Arrow/UpLeftMd',
    component: IconArrowUpLeftMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpLeftMd>;

export default meta;
type Story = StoryObj<typeof IconArrowUpLeftMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
