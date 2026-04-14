import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarTop as IconComp } from './IconSystemBarTop';

const meta = {
    title: 'Icon/System/BarTop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBarTop: Story = {
    name: 'BarTop',
    args: {
        size: '6rem',
    },
};
