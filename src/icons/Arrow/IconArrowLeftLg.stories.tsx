import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftLg } from './IconArrowLeftLg';

const meta = {
    title: 'Icon/Arrow/LeftLg',
    component: IconArrowLeftLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowLeftLg>;

export default meta;
type Story = StoryObj<typeof IconArrowLeftLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
