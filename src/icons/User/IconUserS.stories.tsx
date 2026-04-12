import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserS } from './IconUserS';

const meta = {
    title: 'Icon/User/S',
    component: IconUserS,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserS>;

export default meta;
type Story = StoryObj<typeof IconUserS>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
