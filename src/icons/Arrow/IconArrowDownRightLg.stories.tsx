import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownRightLg as IconComp } from './IconArrowDownRightLg';

const meta = {
    title: 'Icon/Arrow/DownRightLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDownRightLg: Story = {
    name: 'DownRightLg'
    args: {
        size: '6rem',
    },
};
