import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkHorizontal } from './IconInterfaceLinkHorizontal';

const meta = {
    title: 'Icon/Interface/LinkHorizontal',
    component: IconInterfaceLinkHorizontal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLinkHorizontal>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLinkHorizontal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
