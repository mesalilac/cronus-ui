import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBell as IconComp } from './IconCommunicationBell';

const meta = {
    title: 'Icon/Communication/Bell',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBell: Story = {
    name: 'Bell',
    args: {
        size: '6rem',
    },
};
