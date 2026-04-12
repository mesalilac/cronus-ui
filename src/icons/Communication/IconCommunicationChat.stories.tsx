import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationChat as IconComp } from './IconCommunicationChat';

const meta = {
    title: 'Icon/Communication/Chat',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Chat: Story = {
    args: {
        size: '6rem',
    },
};
