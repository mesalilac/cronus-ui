import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkHorizontalOff } from './IconInterfaceLinkHorizontalOff';

const meta = {
    title: 'Icon/Interface/LinkHorizontalOff',
    component: IconInterfaceLinkHorizontalOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLinkHorizontalOff>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLinkHorizontalOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
