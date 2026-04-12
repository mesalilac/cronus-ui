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

export const CreditCard01: Story = {
    args: {
        size: '6rem',
    },
};
