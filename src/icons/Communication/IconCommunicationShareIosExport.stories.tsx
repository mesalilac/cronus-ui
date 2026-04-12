import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationShareIosExport } from './IconCommunicationShareIosExport';

const meta = {
    title: 'Icon/Communication/ShareIosExport',
    component: IconCommunicationShareIosExport,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationShareIosExport>;

export default meta;
type Story = StoryObj<typeof IconCommunicationShareIosExport>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
