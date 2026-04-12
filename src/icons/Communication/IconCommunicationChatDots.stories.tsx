import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatDots } from './IconCommunicationChatDots';

const meta = {
    title: 'Icon/Communication/ChatDots',
    component: IconCommunicationChatDots,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatDots>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatDots>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
