import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftSm as IconComp } from './IconArrowUpLeftSm';

const meta = {
    title: 'Icon/Arrow/UpLeftSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpLeftSm: Story = {
    name: 'UpLeftSm'
    args: {
        size: '6rem',
    },
};
