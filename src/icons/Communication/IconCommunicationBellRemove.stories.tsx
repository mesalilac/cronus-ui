import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellRemove } from './IconCommunicationBellRemove';

const meta = {
    title: 'Icon/Communication/BellRemove',
    component: IconCommunicationBellRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellRemove>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
