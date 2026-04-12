import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleRemove } from './IconCommunicationChatCircleRemove';

const meta = {
    title: 'Icon/Communication/ChatCircleRemove',
    component: IconCommunicationChatCircleRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChatCircleRemove>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChatCircleRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
