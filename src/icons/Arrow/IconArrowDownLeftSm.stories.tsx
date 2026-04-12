import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftSm } from './IconArrowDownLeftSm';

const meta = {
    title: 'Icon/Arrow/DownLeftSm',
    component: IconArrowDownLeftSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownLeftSm>;

export default meta;
type Story = StoryObj<typeof IconArrowDownLeftSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
