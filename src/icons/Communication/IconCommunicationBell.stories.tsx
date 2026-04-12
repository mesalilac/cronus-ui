import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBell } from './IconCommunicationBell';

const meta = {
    title: 'Icon/Communication/Bell',
    component: IconCommunicationBell,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBell>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBell>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
