import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatRemove } from './IconCommunicationChatRemove';

const meta = {
    title: 'Icon/Communication/ChatRemove',
    component: IconCommunicationChatRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatRemove>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
