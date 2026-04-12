import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCheck } from './IconCommunicationChatCheck';

const meta = {
    title: 'Icon/Communication/ChatCheck',
    component: IconCommunicationChatCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCheck>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
