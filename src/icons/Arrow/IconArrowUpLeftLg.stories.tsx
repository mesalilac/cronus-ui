import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLeftLg as IconComp } from './IconArrowUpLeftLg';

const meta = {
    title: 'Icon/Arrow/UpLeftLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const UpLeftLg: Story = {
    args: {
        size: '6rem',
    },
};
