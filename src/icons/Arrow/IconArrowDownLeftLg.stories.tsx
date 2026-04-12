import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftLg } from './IconArrowDownLeftLg';

const meta = {
    title: 'Icon/Arrow/DownLeftLg',
    component: IconArrowDownLeftLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownLeftLg>;

export default meta;
type Story = StoryObj<typeof IconArrowDownLeftLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
