import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingCart01 } from './IconInterfaceShoppingCart01';

const meta = {
    title: 'Icon/Interface/ShoppingCart01',
    component: IconInterfaceShoppingCart01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceShoppingCart01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceShoppingCart01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
