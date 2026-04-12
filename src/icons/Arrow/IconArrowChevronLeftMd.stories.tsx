import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeftMd as IconComp } from './IconArrowChevronLeftMd';

const meta = {
    title: 'Icon/Arrow/ChevronLeftMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChevronLeftMd: Story = {
    args: {
        size: '6rem',
    },
};
