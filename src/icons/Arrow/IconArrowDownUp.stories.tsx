import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownUp } from './IconArrowDownUp';

const meta = {
    title: 'Icon/Arrow/DownUp',
    component: IconArrowDownUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownUp>;

export default meta;
type Story = StoryObj<typeof IconArrowDownUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
