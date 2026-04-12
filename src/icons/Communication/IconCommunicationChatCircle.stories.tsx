import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircle as IconComp } from './IconCommunicationChatCircle';

const meta = {
    title: 'Icon/Communication/ChatCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChatCircle: Story = {
    args: {
        size: '6rem',
    },
};
