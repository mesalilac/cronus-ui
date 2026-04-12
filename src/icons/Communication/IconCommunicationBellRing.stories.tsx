import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellRing } from './IconCommunicationBellRing';

const meta = {
    title: 'Icon/Communication/BellRing',
    component: IconCommunicationBellRing,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellRing>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellRing>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
