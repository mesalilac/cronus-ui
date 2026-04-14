import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleClose as IconComp } from './IconCommunicationChatCircleClose';

const meta = {
    title: 'Icon/Communication/ChatCircleClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatCircleClose: Story = {
    name: 'ChatCircleClose'
    args: {
        size: '6rem',
    },
};
