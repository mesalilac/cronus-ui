import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingBag02 as IconComp } from './IconInterfaceShoppingBag02';

const meta = {
    title: 'Icon/Interface/ShoppingBag02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ShoppingBag02: Story = {
    args: {
        size: '6rem',
    },
};
