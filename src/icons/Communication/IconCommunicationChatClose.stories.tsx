import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatClose } from './IconCommunicationChatClose';

const meta = {
    title: 'Icon/Communication/ChatClose',
    component: IconCommunicationChatClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatClose>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
