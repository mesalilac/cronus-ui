import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftLg } from './IconArrowUpLeftLg';

const meta = {
    title: 'Icon/Arrow/UpLeftLg',
    component: IconArrowUpLeftLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpLeftLg>;

export default meta;
type Story = StoryObj<typeof IconArrowUpLeftLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
