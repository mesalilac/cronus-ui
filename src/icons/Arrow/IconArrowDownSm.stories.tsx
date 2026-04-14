import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownSm as IconComp } from './IconArrowDownSm';

const meta = {
    title: 'Icon/Arrow/DownSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownSm: Story = {
    name: 'DownSm',
    args: {
        size: '6rem',
    },
};
