import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreGridSmall as IconComp } from './IconMenuMoreGridSmall';

const meta = {
    title: 'Icon/Menu/MoreGridSmall',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MoreGridSmall: Story = {
    args: {
        size: '6rem',
    },
};
