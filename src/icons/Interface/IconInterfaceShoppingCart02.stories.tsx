import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingCart02 } from './IconInterfaceShoppingCart02';

const meta = {
    title: 'Icon/Interface/ShoppingCart02',
    component: IconInterfaceShoppingCart02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceShoppingCart02>;

export default meta;
type Story = StoryObj<typeof IconInterfaceShoppingCart02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
