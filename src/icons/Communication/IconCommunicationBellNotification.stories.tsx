import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellNotification as IconComp } from './IconCommunicationBellNotification';

const meta = {
    title: 'Icon/Communication/BellNotification',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BellNotification: Story = {
    args: {
        size: '6rem',
    },
};
