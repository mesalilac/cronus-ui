import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCheck } from './IconUserCheck';

const meta = {
    title: 'Icon/User/Check',
    component: IconUserCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserCheck>;

export default meta;
type Story = StoryObj<typeof IconUserCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
