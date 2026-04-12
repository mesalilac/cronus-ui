import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkBreak } from './IconInterfaceLinkBreak';

const meta = {
    title: 'Icon/Interface/LinkBreak',
    component: IconInterfaceLinkBreak,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLinkBreak>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLinkBreak>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
