import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightSm as IconComp } from './IconArrowRightSm';

const meta = {
    title: 'Icon/Arrow/RightSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const RightSm: Story = {
    args: {
        size: '6rem',
    },
};
