import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTicketVoucher } from './IconInterfaceTicketVoucher';

const meta = {
    title: 'Icon/Interface/TicketVoucher',
    component: IconInterfaceTicketVoucher,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTicketVoucher>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTicketVoucher>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
