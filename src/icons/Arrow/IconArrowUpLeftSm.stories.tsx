import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftSm } from './IconArrowUpLeftSm';

const meta = {
    title: 'Icon/Arrow/UpLeftSm',
    component: IconArrowUpLeftSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpLeftSm>;

export default meta;
type Story = StoryObj<typeof IconArrowUpLeftSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
