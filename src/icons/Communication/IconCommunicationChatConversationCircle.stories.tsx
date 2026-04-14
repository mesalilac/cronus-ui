import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatConversationCircle as IconComp } from './IconCommunicationChatConversationCircle';

const meta = {
    title: 'Icon/Communication/ChatConversationCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatConversationCircle: Story = {
    name: 'ChatConversationCircle',
    args: {
        size: '6rem',
    },
};
