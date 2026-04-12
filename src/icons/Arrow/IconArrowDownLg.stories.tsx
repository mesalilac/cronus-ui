import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLg } from './IconArrowDownLg';

const meta = {
    title: 'Icon/Arrow/DownLg',
    component: IconArrowDownLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownLg>;

export default meta;
type Story = StoryObj<typeof IconArrowDownLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
