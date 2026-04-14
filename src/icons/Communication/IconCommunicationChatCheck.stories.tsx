import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChatCheck as IconComp } from './IconCommunicationChatCheck';

const meta = {
    title: 'Icon/Communication/ChatCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChatCheck: Story = {
    name: 'ChatCheck',
    args: {
        size: '6rem',
    },
};
