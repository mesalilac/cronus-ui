import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDummyCircle as IconComp } from './IconInterfaceDummyCircle';

const meta = {
    title: 'Icon/Interface/DummyCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DummyCircle: Story = {
    args: {
        size: '6rem',
    },
};
