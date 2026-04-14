import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatAdd as IconComp } from './IconCommunicationChatAdd';

const meta = {
    title: 'Icon/Communication/ChatAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatAdd: Story = {
    name: 'ChatAdd'
    args: {
        size: '6rem',
    },
};
