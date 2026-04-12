import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceInstance } from './IconInterfaceInstance';

const meta = {
    title: 'Icon/Interface/Instance',
    component: IconInterfaceInstance,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceInstance>;

export default meta;
type Story = StoryObj<typeof IconInterfaceInstance>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
