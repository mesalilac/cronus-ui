import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftMd as IconComp } from './IconArrowDownLeftMd';

const meta = {
    title: 'Icon/Arrow/DownLeftMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownLeftMd: Story = {
    name: 'DownLeftMd'
    args: {
        size: '6rem',
    },
};
