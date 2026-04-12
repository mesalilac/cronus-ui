import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircle } from './IconCommunicationChatCircle';

const meta = {
    title: 'Icon/Communication/ChatCircle',
    component: IconCommunicationChatCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircle>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
