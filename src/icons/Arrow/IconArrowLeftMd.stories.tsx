import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftMd } from './IconArrowLeftMd';

const meta = {
    title: 'Icon/Arrow/LeftMd',
    component: IconArrowLeftMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowLeftMd>;

export default meta;
type Story = StoryObj<typeof IconArrowLeftMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
