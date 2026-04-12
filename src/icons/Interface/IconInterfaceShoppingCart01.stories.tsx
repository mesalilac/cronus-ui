import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingCart01 as IconComp } from './IconInterfaceShoppingCart01';

const meta = {
    title: 'Icon/Interface/ShoppingCart01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ShoppingCart01: Story = {
    args: {
        size: '6rem',
    },
};
