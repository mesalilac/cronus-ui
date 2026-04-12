import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLg } from './IconArrowUpLg';

const meta = {
    title: 'Icon/Arrow/UpLg',
    component: IconArrowUpLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUpLg>;

export default meta;
type Story = StoryObj<typeof IconArrowUpLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
