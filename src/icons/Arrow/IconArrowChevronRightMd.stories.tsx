import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRightMd as IconComp } from './IconArrowChevronRightMd';

const meta = {
    title: 'Icon/Arrow/ChevronRightMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronRightMd: Story = {
    name: 'ChevronRightMd'
    args: {
        size: '6rem',
    },
};
