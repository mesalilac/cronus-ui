import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceExit } from './IconInterfaceExit';

const meta = {
    title: 'Icon/Interface/Exit',
    component: IconInterfaceExit,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceExit>;

export default meta;
type Story = StoryObj<typeof IconInterfaceExit>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
