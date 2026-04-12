import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarRight } from './IconSystemBarRight';

const meta = {
    title: 'Icon/System/BarRight',
    component: IconSystemBarRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemBarRight>;

export default meta;
type Story = StoryObj<typeof IconSystemBarRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
