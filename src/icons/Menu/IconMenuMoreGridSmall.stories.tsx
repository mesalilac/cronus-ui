import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreGridSmall } from './IconMenuMoreGridSmall';

const meta = {
    title: 'Icon/Menu/MoreGridSmall',
    component: IconMenuMoreGridSmall,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuMoreGridSmall>;

export default meta;
type Story = StoryObj<typeof IconMenuMoreGridSmall>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
