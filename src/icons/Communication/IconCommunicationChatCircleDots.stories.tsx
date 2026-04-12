import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleDots as IconComp } from './IconCommunicationChatCircleDots';

const meta = {
    title: 'Icon/Communication/ChatCircleDots',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChatCircleDots: Story = {
    args: {
        size: '6rem',
    },
};
