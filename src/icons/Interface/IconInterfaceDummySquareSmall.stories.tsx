import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummySquareSmall } from './IconInterfaceDummySquareSmall';

const meta = {
    title: 'Icon/Interface/DummySquareSmall',
    component: IconInterfaceDummySquareSmall,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDummySquareSmall>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDummySquareSmall>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
