import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingBag01 } from './IconInterfaceShoppingBag01';

const meta = {
    title: 'Icon/Interface/ShoppingBag01',
    component: IconInterfaceShoppingBag01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceShoppingBag01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceShoppingBag01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
