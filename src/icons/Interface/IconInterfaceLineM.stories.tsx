import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineM } from './IconInterfaceLineM';

const meta = {
    title: 'Icon/Interface/LineM',
    component: IconInterfaceLineM,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLineM>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLineM>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
