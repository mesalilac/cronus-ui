import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingBag01 as IconComp } from './IconInterfaceShoppingBag01';

const meta = {
    title: 'Icon/Interface/ShoppingBag01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShoppingBag01: Story = {
    name: 'ShoppingBag01',
    args: {
        size: '6rem',
    },
};
