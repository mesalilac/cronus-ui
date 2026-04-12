import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpSm } from './IconArrowUpSm';

const meta = {
    title: 'Icon/Arrow/UpSm',
    component: IconArrowUpSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpSm>;

export default meta;
type Story = StoryObj<typeof IconArrowUpSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
