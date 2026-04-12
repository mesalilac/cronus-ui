import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftMd } from './IconArrowDownLeftMd';

const meta = {
    title: 'Icon/Arrow/DownLeftMd',
    component: IconArrowDownLeftMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownLeftMd>;

export default meta;
type Story = StoryObj<typeof IconArrowDownLeftMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
