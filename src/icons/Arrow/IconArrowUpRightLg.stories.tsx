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

export const UpRightLg: Story = {
    args: {
        size: '6rem',
    },
};
