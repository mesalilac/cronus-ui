import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarTop } from './IconSystemBarTop';

const meta = {
    title: 'Icon/System/BarTop',
    component: IconSystemBarTop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemBarTop>;

export default meta;
type Story = StoryObj<typeof IconSystemBarTop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
