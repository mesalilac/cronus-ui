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

export const IconChatCircleAdd: Story = {
    name: 'ChatCircleAdd',
    args: {
        size: '6rem',
    },
};
