import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatClose as IconComp } from './IconCommunicationChatClose';

const meta = {
    title: 'Icon/Communication/ChatClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChatClose: Story = {
    args: {
        size: '6rem',
    },
};
