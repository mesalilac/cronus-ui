import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownMd } from './IconArrowDownMd';

const meta = {
    title: 'Icon/Arrow/DownMd',
    component: IconArrowDownMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownMd>;

export default meta;
type Story = StoryObj<typeof IconArrowDownMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
