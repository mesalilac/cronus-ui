import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingBag02 } from './IconInterfaceShoppingBag02';

const meta = {
    title: 'Icon/Interface/ShoppingBag02',
    component: IconInterfaceShoppingBag02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceShoppingBag02>;

export default meta;
type Story = StoryObj<typeof IconInterfaceShoppingBag02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
