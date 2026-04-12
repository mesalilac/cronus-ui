import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellOff } from './IconCommunicationBellOff';

const meta = {
    title: 'Icon/Communication/BellOff',
    component: IconCommunicationBellOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellOff>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
