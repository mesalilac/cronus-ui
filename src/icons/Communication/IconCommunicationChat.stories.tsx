import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChat } from './IconCommunicationChat';

const meta = {
    title: 'Icon/Communication/Chat',
    component: IconCommunicationChat,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationChat>;

export default meta;
type Story = StoryObj<typeof IconCommunicationChat>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
