import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightLg } from './IconArrowUpRightLg';

const meta = {
    title: 'Icon/Arrow/UpRightLg',
    component: IconArrowUpRightLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpRightLg>;

export default meta;
type Story = StoryObj<typeof IconArrowUpRightLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
