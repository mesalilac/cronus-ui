import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUpSm as IconComp } from './IconArrowUpSm';

const meta = {
    title: 'Icon/Arrow/UpSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpSm: Story = {
    name: 'UpSm'
    args: {
        size: '6rem',
    },
};
