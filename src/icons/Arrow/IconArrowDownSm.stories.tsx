import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownSm } from './IconArrowDownSm';

const meta = {
    title: 'Icon/Arrow/DownSm',
    component: IconArrowDownSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownSm>;

export default meta;
type Story = StoryObj<typeof IconArrowDownSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
