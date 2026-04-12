import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserAdd } from './IconUserAdd';

const meta = {
    title: 'Icon/User/Add',
    component: IconUserAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserAdd>;

export default meta;
type Story = StoryObj<typeof IconUserAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
