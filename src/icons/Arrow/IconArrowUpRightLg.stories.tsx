import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpRightLg as IconComp } from './IconArrowUpRightLg';

const meta = {
    title: 'Icon/Arrow/UpRightLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpRightLg: Story = {
    name: 'UpRightLg',
    args: {
        size: '6rem',
    },
};
