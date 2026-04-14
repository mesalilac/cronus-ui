import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightMd as IconComp } from './IconArrowUpRightMd';

const meta = {
    title: 'Icon/Arrow/UpRightMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpRightMd: Story = {
    name: 'UpRightMd',
    args: {
        size: '6rem',
    },
};
