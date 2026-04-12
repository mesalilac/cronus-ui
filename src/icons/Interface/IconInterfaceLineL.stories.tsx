import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineL } from './IconInterfaceLineL';

const meta = {
    title: 'Icon/Interface/LineL',
    component: IconInterfaceLineL,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLineL>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLineL>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
