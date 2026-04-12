import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellNotification } from './IconCommunicationBellNotification';

const meta = {
    title: 'Icon/Communication/BellNotification',
    component: IconCommunicationBellNotification,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellNotification>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellNotification>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
