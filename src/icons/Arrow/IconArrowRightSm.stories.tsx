import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightSm } from './IconArrowRightSm';

const meta = {
    title: 'Icon/Arrow/RightSm',
    component: IconArrowRightSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowRightSm>;

export default meta;
type Story = StoryObj<typeof IconArrowRightSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
