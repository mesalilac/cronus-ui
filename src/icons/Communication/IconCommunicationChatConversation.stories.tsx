import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatConversation as IconComp } from './IconCommunicationChatConversation';

const meta = {
    title: 'Icon/Communication/ChatConversation',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatConversation: Story = {
    name: 'ChatConversation',
    args: {
        size: '6rem',
    },
};
