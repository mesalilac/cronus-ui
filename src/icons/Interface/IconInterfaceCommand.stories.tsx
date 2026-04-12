import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCommand } from './IconInterfaceCommand';

const meta = {
    title: 'Icon/Interface/Command',
    component: IconInterfaceCommand,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCommand>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCommand>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
