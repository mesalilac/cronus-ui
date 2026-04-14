import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightMd as IconComp } from './IconArrowDownRightMd';

const meta = {
    title: 'Icon/Arrow/DownRightMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownRightMd: Story = {
    name: 'DownRightMd',
    args: {
        size: '6rem',
    },
};
