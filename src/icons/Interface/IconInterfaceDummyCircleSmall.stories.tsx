import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummyCircleSmall as IconComp } from './IconInterfaceDummyCircleSmall';

const meta = {
    title: 'Icon/Interface/DummyCircleSmall',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DummyCircleSmall: Story = {
    args: {
        size: '6rem',
    },
};
