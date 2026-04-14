import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpLg as IconComp } from './IconArrowUpLg';

const meta = {
    title: 'Icon/Arrow/UpLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpLg: Story = {
    name: 'UpLg'
    args: {
        size: '6rem',
    },
};
