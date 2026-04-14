import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCircleRemove as IconComp } from './IconCommunicationChatCircleRemove';

const meta = {
    title: 'Icon/Communication/ChatCircleRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatCircleRemove: Story = {
    name: 'ChatCircleRemove',
    args: {
        size: '6rem',
    },
};
