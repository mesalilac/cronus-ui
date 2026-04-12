import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummySquare } from './IconInterfaceDummySquare';

const meta = {
    title: 'Icon/Interface/DummySquare',
    component: IconInterfaceDummySquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDummySquare>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDummySquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
