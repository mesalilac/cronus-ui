import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleCheck } from './IconCommunicationChatCircleCheck';

const meta = {
    title: 'Icon/Communication/ChatCircleCheck',
    component: IconCommunicationChatCircleCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircleCheck>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircleCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
