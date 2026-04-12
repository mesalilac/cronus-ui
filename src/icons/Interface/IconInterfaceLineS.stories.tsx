import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineS } from './IconInterfaceLineS';

const meta = {
    title: 'Icon/Interface/LineS',
    component: IconInterfaceLineS,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLineS>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLineS>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
