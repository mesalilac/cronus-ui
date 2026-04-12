import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightMd } from './IconArrowDownRightMd';

const meta = {
    title: 'Icon/Arrow/DownRightMd',
    component: IconArrowDownRightMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownRightMd>;

export default meta;
type Story = StoryObj<typeof IconArrowDownRightMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
