import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummySquare as IconComp } from './IconInterfaceDummySquare';

const meta = {
    title: 'Icon/Interface/DummySquare',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDummySquare: Story = {
    name: 'DummySquare',
    args: {
        size: '6rem',
    },
};
