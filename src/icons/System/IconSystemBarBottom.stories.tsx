import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarBottom } from './IconSystemBarBottom';

const meta = {
    title: 'Icon/System/BarBottom',
    component: IconSystemBarBottom,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemBarBottom>;

export default meta;
type Story = StoryObj<typeof IconSystemBarBottom>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
