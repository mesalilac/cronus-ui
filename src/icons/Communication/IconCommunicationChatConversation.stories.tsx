import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatConversation } from './IconCommunicationChatConversation';

const meta = {
    title: 'Icon/Communication/ChatConversation',
    component: IconCommunicationChatConversation,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatConversation>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatConversation>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
