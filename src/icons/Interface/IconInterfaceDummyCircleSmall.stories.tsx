import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummyCircleSmall } from './IconInterfaceDummyCircleSmall';

const meta = {
    title: 'Icon/Interface/DummyCircleSmall',
    component: IconInterfaceDummyCircleSmall,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDummyCircleSmall>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDummyCircleSmall>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
