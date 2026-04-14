import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTicketVoucher as IconComp } from './IconInterfaceTicketVoucher';

const meta = {
    title: 'Icon/Interface/TicketVoucher',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTicketVoucher: Story = {
    name: 'TicketVoucher',
    args: {
        size: '6rem',
    },
};
