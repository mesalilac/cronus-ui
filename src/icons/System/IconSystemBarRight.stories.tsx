import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarRight as IconComp } from './IconSystemBarRight';

const meta = {
    title: 'Icon/System/BarRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BarRight: Story = {
    args: {
        size: '6rem',
    },
};
