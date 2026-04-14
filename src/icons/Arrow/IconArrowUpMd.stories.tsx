import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpMd as IconComp } from './IconArrowUpMd';

const meta = {
    title: 'Icon/Arrow/UpMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpMd: Story = {
    name: 'UpMd',
    args: {
        size: '6rem',
    },
};
