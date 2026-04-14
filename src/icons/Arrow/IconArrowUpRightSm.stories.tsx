import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightSm as IconComp } from './IconArrowUpRightSm';

const meta = {
    title: 'Icon/Arrow/UpRightSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpRightSm: Story = {
    name: 'UpRightSm'
    args: {
        size: '6rem',
    },
};
