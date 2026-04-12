import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellRing as IconComp } from './IconCommunicationBellRing';

const meta = {
    title: 'Icon/Communication/BellRing',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BellRing: Story = {
    args: {
        size: '6rem',
    },
};
