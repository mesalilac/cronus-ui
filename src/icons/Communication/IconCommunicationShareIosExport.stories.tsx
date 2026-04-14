import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationShareIosExport as IconComp } from './IconCommunicationShareIosExport';

const meta = {
    title: 'Icon/Communication/ShareIosExport',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShareIosExport: Story = {
    name: 'ShareIosExport',
    args: {
        size: '6rem',
    },
};
