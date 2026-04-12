import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightLg } from './IconArrowRightLg';

const meta = {
    title: 'Icon/Arrow/RightLg',
    component: IconArrowRightLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowRightLg>;

export default meta;
type Story = StoryObj<typeof IconArrowRightLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
