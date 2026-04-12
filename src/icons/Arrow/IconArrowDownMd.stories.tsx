import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownMd as IconComp } from './IconArrowDownMd';

const meta = {
    title: 'Icon/Arrow/DownMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DownMd: Story = {
    args: {
        size: '6rem',
    },
};
