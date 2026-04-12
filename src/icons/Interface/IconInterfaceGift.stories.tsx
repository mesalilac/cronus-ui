import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceGift } from './IconInterfaceGift';

const meta = {
    title: 'Icon/Interface/Gift',
    component: IconInterfaceGift,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceGift>;

export default meta;
type Story = StoryObj<typeof IconInterfaceGift>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
