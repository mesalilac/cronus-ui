import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCreditCard01 } from './IconInterfaceCreditCard01';

const meta = {
    title: 'Icon/Interface/CreditCard01',
    component: IconInterfaceCreditCard01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCreditCard01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCreditCard01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
