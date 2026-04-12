import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleClose } from './IconCommunicationChatCircleClose';

const meta = {
    title: 'Icon/Communication/ChatCircleClose',
    component: IconCommunicationChatCircleClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircleClose>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircleClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
