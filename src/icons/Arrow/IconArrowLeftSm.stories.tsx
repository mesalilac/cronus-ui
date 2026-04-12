import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftSm } from './IconArrowLeftSm';

const meta = {
    title: 'Icon/Arrow/LeftSm',
    component: IconArrowLeftSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowLeftSm>;

export default meta;
type Story = StoryObj<typeof IconArrowLeftSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
