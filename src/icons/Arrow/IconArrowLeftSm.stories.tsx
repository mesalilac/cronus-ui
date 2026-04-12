import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftSm as IconComp } from './IconArrowLeftSm';

const meta = {
    title: 'Icon/Arrow/LeftSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LeftSm: Story = {
    args: {
        size: '6rem',
    },
};
