import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummyCircle } from './IconInterfaceDummyCircle';

const meta = {
    title: 'Icon/Interface/DummyCircle',
    component: IconInterfaceDummyCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDummyCircle>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDummyCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
