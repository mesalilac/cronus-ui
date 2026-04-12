import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleCheck as IconComp } from './IconCommunicationChatCircleCheck';

const meta = {
    title: 'Icon/Communication/ChatCircleCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChatCircleCheck: Story = {
    args: {
        size: '6rem',
    },
};
