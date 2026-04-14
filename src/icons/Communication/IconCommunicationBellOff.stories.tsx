import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellOff as IconComp } from './IconCommunicationBellOff';

const meta = {
    title: 'Icon/Communication/BellOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBellOff: Story = {
    name: 'BellOff',
    args: {
        size: '6rem',
    },
};
