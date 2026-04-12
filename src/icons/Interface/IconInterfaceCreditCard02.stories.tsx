import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCreditCard02 } from './IconInterfaceCreditCard02';

const meta = {
    title: 'Icon/Interface/CreditCard02',
    component: IconInterfaceCreditCard02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCreditCard02>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCreditCard02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
