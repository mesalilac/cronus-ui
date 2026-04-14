import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummySquareSmall as IconComp } from './IconInterfaceDummySquareSmall';

const meta = {
    title: 'Icon/Interface/DummySquareSmall',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDummySquareSmall: Story = {
    name: 'DummySquareSmall',
    args: {
        size: '6rem',
    },
};
