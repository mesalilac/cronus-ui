import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightMd } from './IconArrowRightMd';

const meta = {
    title: 'Icon/Arrow/RightMd',
    component: IconArrowRightMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowRightMd>;

export default meta;
type Story = StoryObj<typeof IconArrowRightMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
