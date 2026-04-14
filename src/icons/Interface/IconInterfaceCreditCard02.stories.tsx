import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCreditCard02 as IconComp } from './IconInterfaceCreditCard02';

const meta = {
    title: 'Icon/Interface/CreditCard02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCreditCard02: Story = {
    name: 'CreditCard02'
    args: {
        size: '6rem',
    },
};
