import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLeftLg as IconComp } from './IconArrowDownLeftLg';

const meta = {
    title: 'Icon/Arrow/DownLeftLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownLeftLg: Story = {
    name: 'DownLeftLg'
    args: {
        size: '6rem',
    },
};
