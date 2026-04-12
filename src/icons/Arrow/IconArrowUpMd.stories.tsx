import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpMd } from './IconArrowUpMd';

const meta = {
    title: 'Icon/Arrow/UpMd',
    component: IconArrowUpMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpMd>;

export default meta;
type Story = StoryObj<typeof IconArrowUpMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
