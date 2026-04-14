import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatDots as IconComp } from './IconCommunicationChatDots';

const meta = {
    title: 'Icon/Communication/ChatDots',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatDots: Story = {
    name: 'ChatDots'
    args: {
        size: '6rem',
    },
};
