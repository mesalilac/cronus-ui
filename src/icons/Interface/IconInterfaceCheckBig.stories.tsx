import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckBig as IconComp } from './IconInterfaceCheckBig';

const meta = {
    title: 'Icon/Interface/CheckBig',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckBig: Story = {
    name: 'CheckBig',
    args: {
        size: '6rem',
    },
};
