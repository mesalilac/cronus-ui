import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellClose as IconComp } from './IconCommunicationBellClose';

const meta = {
    title: 'Icon/Communication/BellClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BellClose: Story = {
    args: {
        size: '6rem',
    },
};
