import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellAdd } from './IconCommunicationBellAdd';

const meta = {
    title: 'Icon/Communication/BellAdd',
    component: IconCommunicationBellAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellAdd>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
