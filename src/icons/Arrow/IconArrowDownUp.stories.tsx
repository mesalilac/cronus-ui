import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownUp as IconComp } from './IconArrowDownUp';

const meta = {
    title: 'Icon/Arrow/DownUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DownUp: Story = {
    args: {
        size: '6rem',
    },
};
