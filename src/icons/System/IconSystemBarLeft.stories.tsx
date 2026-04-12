import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarLeft } from './IconSystemBarLeft';

const meta = {
    title: 'Icon/System/BarLeft',
    component: IconSystemBarLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemBarLeft>;

export default meta;
type Story = StoryObj<typeof IconSystemBarLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
