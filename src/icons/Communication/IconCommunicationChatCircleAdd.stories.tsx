import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleAdd as IconComp } from './IconCommunicationChatCircleAdd';

const meta = {
    title: 'Icon/Communication/ChatCircleAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChatCircleAdd: Story = {
    args: {
        size: '6rem',
    },
};
