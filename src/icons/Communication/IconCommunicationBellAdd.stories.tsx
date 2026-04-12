import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellAdd as IconComp } from './IconCommunicationBellAdd';

const meta = {
    title: 'Icon/Communication/BellAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BellAdd: Story = {
    args: {
        size: '6rem',
    },
};
