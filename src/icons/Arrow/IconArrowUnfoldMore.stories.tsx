import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUnfoldMore } from './IconArrowUnfoldMore';

const meta = {
    title: 'Icon/Arrow/UnfoldMore',
    component: IconArrowUnfoldMore,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUnfoldMore>;

export default meta;
type Story = StoryObj<typeof IconArrowUnfoldMore>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
