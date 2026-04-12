import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationPaperPlane } from './IconCommunicationPaperPlane';

const meta = {
    title: 'Icon/Communication/PaperPlane',
    component: IconCommunicationPaperPlane,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationPaperPlane>;

export default meta;
type Story = StoryObj<typeof IconCommunicationPaperPlane>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
