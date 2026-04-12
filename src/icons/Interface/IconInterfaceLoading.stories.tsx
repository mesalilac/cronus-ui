import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLoading } from './IconInterfaceLoading';

const meta = {
    title: 'Icon/Interface/Loading',
    component: IconInterfaceLoading,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLoading>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLoading>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
