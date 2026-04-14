import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownLg as IconComp } from './IconArrowDownLg';

const meta = {
    title: 'Icon/Arrow/DownLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownLg: Story = {
    name: 'DownLg',
    args: {
        size: '6rem',
    },
};
