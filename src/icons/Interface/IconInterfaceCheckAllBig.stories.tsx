import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckAllBig as IconComp } from './IconInterfaceCheckAllBig';

const meta = {
    title: 'Icon/Interface/CheckAllBig',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckAllBig: Story = {
    name: 'CheckAllBig',
    args: {
        size: '6rem',
    },
};
