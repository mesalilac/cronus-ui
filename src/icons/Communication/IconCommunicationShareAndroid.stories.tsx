import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationShareAndroid } from './IconCommunicationShareAndroid';

const meta = {
    title: 'Icon/Communication/ShareAndroid',
    component: IconCommunicationShareAndroid,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCommunicationShareAndroid>;

export default meta;
type Story = StoryObj<typeof IconCommunicationShareAndroid>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
