import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatAdd } from './IconCommunicationChatAdd';

const meta = {
    title: 'Icon/Communication/ChatAdd',
    component: IconCommunicationChatAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatAdd>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
