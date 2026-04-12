import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightSm } from './IconArrowDownRightSm';

const meta = {
    title: 'Icon/Arrow/DownRightSm',
    component: IconArrowDownRightSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowDownRightSm>;

export default meta;
type Story = StoryObj<typeof IconArrowDownRightSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
