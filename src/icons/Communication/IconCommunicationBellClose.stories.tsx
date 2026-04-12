import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellClose } from './IconCommunicationBellClose';

const meta = {
    title: 'Icon/Communication/BellClose',
    component: IconCommunicationBellClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationBellClose>;

export default meta;
type Story = StoryObj<typeof IconCommunicationBellClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
