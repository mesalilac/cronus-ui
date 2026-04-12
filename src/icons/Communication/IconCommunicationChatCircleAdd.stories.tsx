import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleAdd } from './IconCommunicationChatCircleAdd';

const meta = {
    title: 'Icon/Communication/ChatCircleAdd',
    component: IconCommunicationChatCircleAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircleAdd>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircleAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
