import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleDots } from './IconCommunicationChatCircleDots';

const meta = {
    title: 'Icon/Communication/ChatCircleDots',
    component: IconCommunicationChatCircleDots,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircleDots>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircleDots>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
