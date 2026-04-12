import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightLg } from './IconArrowDownRightLg';

const meta = {
    title: 'Icon/Arrow/DownRightLg',
    component: IconArrowDownRightLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownRightLg>;

export default meta;
type Story = StoryObj<typeof IconArrowDownRightLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
