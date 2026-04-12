import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationPhone } from './IconCommunicationPhone';

const meta = {
    title: 'Icon/Communication/Phone',
    component: IconCommunicationPhone,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationPhone>;

export default meta;
type Story = StoryObj<typeof IconCommunicationPhone>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
