import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftSm as IconComp } from './IconArrowDownLeftSm';

const meta = {
    title: 'Icon/Arrow/DownLeftSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownLeftSm: Story = {
    name: 'DownLeftSm'
    args: {
        size: '6rem',
    },
};
