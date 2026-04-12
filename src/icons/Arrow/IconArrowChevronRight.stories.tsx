import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRight as IconComp } from './IconArrowChevronRight';

const meta = {
    title: 'Icon/Arrow/ChevronRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChevronRight: Story = {
    args: {
        size: '6rem',
    },
};
