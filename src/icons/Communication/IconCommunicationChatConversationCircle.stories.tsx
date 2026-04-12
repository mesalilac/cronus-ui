import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatConversationCircle } from './IconCommunicationChatConversationCircle';

const meta = {
    title: 'Icon/Communication/ChatConversationCircle',
    component: IconCommunicationChatConversationCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatConversationCircle>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatConversationCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
