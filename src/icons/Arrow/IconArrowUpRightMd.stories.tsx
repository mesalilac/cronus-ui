import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightMd } from './IconArrowUpRightMd';

const meta = {
    title: 'Icon/Arrow/UpRightMd',
    component: IconArrowUpRightMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpRightMd>;

export default meta;
type Story = StoryObj<typeof IconArrowUpRightMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
