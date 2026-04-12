import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightSm } from './IconArrowUpRightSm';

const meta = {
    title: 'Icon/Arrow/UpRightSm',
    component: IconArrowUpRightSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpRightSm>;

export default meta;
type Story = StoryObj<typeof IconArrowUpRightSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
