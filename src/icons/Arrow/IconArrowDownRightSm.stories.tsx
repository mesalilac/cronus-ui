import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightSm as IconComp } from './IconArrowDownRightSm';

const meta = {
    title: 'Icon/Arrow/DownRightSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DownRightSm: Story = {
    args: {
        size: '6rem',
    },
};
