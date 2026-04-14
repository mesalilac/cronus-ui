import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatRemove as IconComp } from './IconCommunicationChatRemove';

const meta = {
    title: 'Icon/Communication/ChatRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatRemove: Story = {
    name: 'ChatRemove'
    args: {
        size: '6rem',
    },
};
