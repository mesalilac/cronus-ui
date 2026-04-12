import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMouse } from './IconSystemMouse';

const meta = {
    title: 'Icon/System/Mouse',
    component: IconSystemMouse,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMouse>;

export default meta;
type Story = StoryObj<typeof IconSystemMouse>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
