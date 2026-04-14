import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCreditCard01 as IconComp } from './IconInterfaceCreditCard01';

const meta = {
    title: 'Icon/Interface/CreditCard01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCreditCard01: Story = {
    name: 'CreditCard01',
    args: {
        size: '6rem',
    },
};
