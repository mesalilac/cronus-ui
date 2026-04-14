import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceShoppingCart02 as IconComp } from './IconInterfaceShoppingCart02';

const meta = {
    title: 'Icon/Interface/ShoppingCart02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShoppingCart02: Story = {
    name: 'ShoppingCart02',
    args: {
        size: '6rem',
    },
};
