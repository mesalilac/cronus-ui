import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationMail } from './IconCommunicationMail';

const meta = {
    title: 'Icon/Communication/Mail',
    component: IconCommunicationMail,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationMail>;

export default meta;
type Story = StoryObj<typeof IconCommunicationMail>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
