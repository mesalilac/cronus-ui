import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationMailOpen } from './IconCommunicationMailOpen';

const meta = {
    title: 'Icon/Communication/MailOpen',
    component: IconCommunicationMailOpen,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationMailOpen>;

export default meta;
type Story = StoryObj<typeof IconCommunicationMailOpen>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
