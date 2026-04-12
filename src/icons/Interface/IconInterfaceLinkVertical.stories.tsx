import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkVertical } from './IconInterfaceLinkVertical';

const meta = {
    title: 'Icon/Interface/LinkVertical',
    component: IconInterfaceLinkVertical,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLinkVertical>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLinkVertical>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
